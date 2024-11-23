"use client";
import About from "@/components/About";
import Faq from "@/components/Faq";
import FileList from "@/components/File/FileList";
import FolderList from "@/components/Folder/FolderList";
import { useFolderContext } from "@/components/FolderContext";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Ready from "@/components/Ready";
import Topbar from "@/components/Topbar";
import Works from "@/components/Works";
import { app } from "@/Config/FirebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Folder {
  id: string;
  name: string;
}

export default function Home() {
  const db = getFirestore(app);
  const { data: session } = useSession();
  const [folderList, setFolderList] = useState<Folder[]>([]);
  const { refreshFolders } = useFolderContext();

  useEffect(() => {
    if (session?.user) {
      const fetchFolders = async () => {
        await getFolderList();
      };
      fetchFolders();
    }
  }, [session, refreshFolders]);

  const getFolderList = async () => {
    setFolderList([]);
    const q = query(
      collection(db, "Folders"),
      where("createBy", "==", session?.user?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      const folderData = doc.data() as Folder;
      setFolderList((folderList) => [...folderList, folderData]);
    });
  };
  return (
    <>
      {session ? (
        <div className="flex flex-col w-full pt-6 gap-3">
          <div className=" bg-[#010314] py-3 px-10 rounded-[50px]">
            <h1 className="font-bold text-[1.5rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center inline-block w-fit">
              Folder 1
            </h1>
            <div> </div>
          </div>
          <div className="grid grid-cols-4 w-full">
            <div className="col-span-3">
              <FolderList folderList={folderList} />
              <FileList />
            </div>
            <div className="w-full h-[70vh] bg-[#010314]">
              Storage
              <button onClick={() => signOut()}>Logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Topbar />
          <Hero />
          <div className="w-full h-[15vw]"></div>
          <About />
          <Works />
          <Pricing />
          <Faq />
          <Ready />
          <Footer />
        </div>
      )}
    </>
  );
}
