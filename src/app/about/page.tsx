import Image from "next/image";
import React from "react";

import Testimoni from "./aboutComponent/testimoni";
import Bg from "./aboutComponent/bg";

export default function Page() {
  return (
    <div>
      <Bg/>
      <Testimoni/>
    </div>
  );
}
