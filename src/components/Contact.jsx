import footer from "../assets/footer.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";

const Contact = () => {
  return (
    <section className="min-h-[800px] relative ">
      <img
        draggable="false"
        className="absolute left-0 bottom-0 w-full object-cover h-auto z-0"
        src={footer}
      />
      <ul className="flex gap-x-16 text-base font-medium relative z-10 container justify-center pt-60">
        <a
          className="hover:text-[#939AFF] tracking-wider flex gap-2 items-center"
          href="https://github.com/Bagajqmomo?tab=repositories"
        >
          <img src={github} alt="github-icon" className="w-12" />
        </a>
        <a
          className="hover:text-[#939AFF] tracking-wider flex gap-2 items-center"
          href="https://www.linkedin.com/in/hang-chang-yun-1548a4232/"
        >
          <img src={linkedin} alt="linkedin-icon" className="w-12" />
        </a>
        <a
          className="hover:text-[#939AFF] tracking-wider flex gap-2 items-center"
          href="changyunjob@gmail.com"
        >
          <img src={email} alt="email-icon" className="w-12" />
        </a>
      </ul>
    </section>
  );
};

export default Contact;
