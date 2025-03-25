import { useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '@/app/config';
import { arrayUnion, collection, doc, increment, setDoc, Timestamp } from 'firebase/firestore';


const DownloadButton: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const getUserIp = async (): Promise<string> => {
    try {
      const response = await fetch("https://nearhive.in/server.php");
      if (!response.ok) {
        throw new Error("Failed to fetch IP");
      }
      const data: { ip: string } = await response.json();

      return data.ip ;

    } catch (error) {
      console.error("Error fetching IP:", error);
      return "";
    }
  };
  

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const apkRef = ref(storage, 'Apks/app-release.apk');
  
      const downloadURL = await getDownloadURL(apkRef);
      
      const link = document.createElement('a');
      link.href = downloadURL;
      link.setAttribute('download', 'Nearhive.apk');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      const ip = await getUserIp() ;

      await setDoc(doc(db, "Download Click ", "doc"), {
        userIps : arrayUnion(ip) ,
        lastUpdated : Timestamp.now()
      },{   merge : true   });


    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download the Nearhive app. Please try again later.");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <>
    <div className='group relative cursor-pointer py-2 px-6 w-44 border bg-white rounded-full overflow-hidden text-black text-center font-semibold'>
      <span 
        onClick={!downloading ? handleDownload : undefined}
        className={`translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block ${
          downloading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {downloading ? 'Downloading...' : 'Download Now'}
      </span>
      <div 
        onClick={!downloading ? handleDownload : undefined}
        className={`flex gap-2 text-black bg-[#F1B729] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ${
          downloading ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <span>{downloading ? 'Downloading...' : 'Download Now'}</span>
      </div>
    </div>
         </>
  );
};

export default DownloadButton;
