import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            My journey in web development is driven by a passion for creating robust and efficient backend solutions.
            With a strong foundation in JavaScript and expertise in Node.js, I build scalable and high-performance applications.
            I specialize in frameworks like Express.js and Nest.js, enabling seamless integration of server-side logic with user interfaces. My proficiency in PHP and Laravel further enhances my ability to develop dynamic, secure, and database-driven applications.
            I excel in designing RESTful APIs, managing databases with MySQL and MongoDB, and ensuring application security and performance. My commitment to clean, maintainable code and my collaborative approach make me a valuable asset to any development team.
            Join me on my journey as I continue to explore new technologies and methodologies, shaping the future of web development with innovative backend solutions.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ <sub className="font-semibold text-base">Companies worked with</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Techyrushi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Techyrushi"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Link href="https://github.com/Techyrushi" target="_blank" className="w-full">
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api?username=Techyrushi&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="Techyrushi"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,html,css,git,github,c,cpp,java,linux,mongodb,mysql,nestjs,nodejs,npm,aws,figma,vercel,vscode,laravel,php,bootstrap,bash,kubernetes,docker,azure,express,postman,redis,python,visualstudio`}
            alt="Techyrushi"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Techyrushi&theme=dark&type=svg&background=EB545400&ring=FFEF20&border=FFF60C00"
            alt="Techyrushi streak"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-6 !p-0"}>
          <a
            href="https://github.com/Techyrushi/Dive-into-My-Tech-Project-Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=Techyrushi&repo=Dive-into-My-Tech-Project-Collection&hide_border=true&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&text_bold=false&description_lines_count=2&icon_color=FEFE5B"
              alt="Techyrushi repo"
              loading="lazy"
            />
          </a>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://raw.githubusercontent.com/avayyyyyyy/avayyyyyyy/output/snake.svg`}
            alt="Techyrushi"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
