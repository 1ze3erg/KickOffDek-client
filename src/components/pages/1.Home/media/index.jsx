import media1 from "./img1.jpg";
import media2 from "./img2.jpg";
import media3 from "./img3.jpg";
import media4 from "./img4.jpg";
import media5 from "./img5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];