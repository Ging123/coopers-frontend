import image1 from './images/e82c0cc3-94f0-4a09-8f43-fc5998b6fac5.jpg';
import image2 from './images/97aa196c-ce21-4445-89fe-f79949706265.jpg';
import image3 from './images/43d365a0-3098-4c29-a719-3914838d7759.jpg';
import image4 from './images/e82c0cc3-94f0-4a09-8f43-fc5998b6fac3.jpg';
import image5 from './images/e82c0cc3-94f0-4a09-8f43-fc5998b6fad9.jpg';
import image6 from './images/e82c0cc3-94f0-4a09-8f43-fc5998b6facb.jpg';
import image7 from './images/97aa196c-ce21-4445-89fe-f799497062gg.jpg';
import image8 from './images/e82c0cc3-94f0-4a09-8f43-fc5998b6fgit.jpg';
import image9 from './images/e82c0cc3-94f0-4a09-8f43-fc5998b6jack.jpg';

export interface post {
  src:string,
  description:string;
}

export const postData1:post[] = [
  {
    src:image1,
    description:'Organize your daily job enhance your life performance'
  },
  {
    src:image2,
    description:'Mark one activity as done makes your brain understands the power of doing.'
  },
  {
    src:image3,
    description:'Careful with missunderstanding the difference between a list of things and a list of desires.'
  }
];

export const postData2:post[] = [
  {
    src:image4,
    description:"Have better mental health while working"
  },
  {
    src:image5,
    description:"Enjoy a sense of greater progression in your work"
  },
  {
    src:image6,
    description:"Be careful not to list more things than you can complete."
  }
];

export const postData3:post[] = [
  {
    src:image7,
    description:"learn new skills"
  },
  {
    src:image8,
    description:"Have fun"
  },
  {
    src:image9,
    description:"Learn to prioritize your most important tasks"
  }
];