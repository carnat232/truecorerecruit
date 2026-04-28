import gricelda from "@/assets/team/gricelda.jpeg";
import emily from "@/assets/team/emily.jpeg";
import taylor from "@/assets/team/taylor.jpeg";
import courtney from "@/assets/team/courtney.jpeg";
import linda from "@/assets/team/linda.jpeg";
import sami from "@/assets/team/sami.jpeg";
import loren from "@/assets/team/loren.jpeg";
import kristy from "@/assets/team/kristy.jpeg";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Gricelda Arias",
    role: "Senior Recruitment Consultant",
    bio: "Specialist in talent acquisition, candidate engagement, and delivering high-quality hiring solutions across diverse industries.",
    image: gricelda,
  },
  {
    name: "Emily Bush",
    role: "Talent Acquisition Specialist",
    bio: "Experienced in sourcing top-tier candidates, managing recruitment pipelines, and enhancing employer hiring strategies.",
    image: emily,
  },
  {
    name: "Taylor Odle",
    role: "Recruitment Consultant",
    bio: "Focused on candidate matching, client collaboration, and ensuring efficient and successful placement processes.",
    image: taylor,
  },
  {
    name: "Courtney Patterson",
    role: "Senior HR & Recruitment Consultant",
    bio: "Skilled in full-cycle recruitment, candidate lifecycle management, and talent development strategies.",
    image: courtney,
  },
  {
    name: "Linda Chase",
    role: "Client Relationship Manager",
    bio: "Manages employer partnerships and ensures high-quality recruitment delivery and client satisfaction.",
    image: linda,
  },
  {
    name: "Sami Weyhrauch",
    role: "Talent Sourcing Specialist",
    bio: "Expert in identifying, attracting, and engaging top talent across multiple industries.",
    image: sami,
  },
  {
    name: "Loren McCowan",
    role: "Senior Talent Consultant",
    bio: "Provides strategic recruitment solutions and supports high-level hiring initiatives.",
    image: loren,
  },
  {
    name: "Kristy Mitchell",
    role: "Candidate Success Manager",
    bio: "Ensures a smooth recruitment experience and supports candidates throughout their career journey.",
    image: kristy,
  },
];
