import getMobileOperatingSystem from "@/utils/getMobileOperatingSystem";
import { useEffect, useState } from "react";

function usePlatform() {
  const [os, setOs] = useState('');

  useEffect(() => {
    setOs(getMobileOperatingSystem());
  }, []);

  return { os };
}

export default usePlatform;
