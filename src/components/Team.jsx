import React from "react";
import Member from "./Member";

import { ReactComponent as AvatarFox } from "../images/avatar-fox.svg";
import { ReactComponent as AvatarArticTern } from "../images/avatar-artic-tern.svg";
import { ReactComponent as AvatarBat } from "../images/avatar-bat.svg";
import { ReactComponent as AvatarChameleon } from "../images/avatar-chameleon.svg";
import { ReactComponent as AvatarOwl } from "../images/avatar-owl.svg";
import { ReactComponent as AvatarTurtle } from "../images/avatar-turtle.svg";
import { ReactComponent as AvatarWolf } from "../images/avatar-wolf.svg";

import { ReactComponent as Worldmap } from "../images/team-worldmap.svg";

const Team = () => {
  const testURL = "https://www.google.com/";

  return (
    <section className="team">
      <div className="background">
        <Worldmap />
      </div>
      <h2 className="section-title">Nuestro equipo</h2>
      <p className="section-subtitle">
        Conoce a los encargados de los proyectos y su labor
      </p>

      <div className="members">
        <Member
          avatar={<AvatarFox />}
          nickname={"Erickson"}
          contact={{
            linkedin: testURL,
            twitter: null,
            behance: null,
            instagram: null,
          }}
          work={"CEO"}
        />
        <Member
          avatar={<AvatarTurtle />}
          nickname={"DaniBit"}
          contact={{
            linkedin: testURL,
            twitter: null,
            behance: null,
            instagram: null,
          }}
          work={"CFO"}
        />
        <Member
          avatar={<AvatarOwl />}
          nickname={"WHOLEHAND"}
          contact={{
            linkedin: testURL,
            twitter: null,
            behance: null,
            instagram: null,
          }}
          work={"COO/DG"}
        />
        <Member
          avatar={<AvatarArticTern />}
          nickname={"Leonardo"}
          contact={{
            linkedin: testURL,
            twitter: null,
            behance: null,
            instagram: null,
          }}
          work={"Desarrollador Web"}
        />
        <Member
          avatar={<AvatarBat />}
          nickname={"Jhontex"}
          contact={{
            linkedin: testURL,
            twitter: null,
            behance: null,
            instagram: null,
          }}
          work={"Programador"}
        />
        <Member
          avatar={<AvatarWolf />}
          nickname={"JayBlaze"}
          contact={{
            linkedin: testURL,
            twitter: null,
            behance: null,
            instagram: null,
          }}
          work={"Programador"}
        />
        <Member
          avatar={<AvatarChameleon />}
          nickname={"Joker"}
          contact={{
            linkedin: testURL,
            twitter: null,
            behance: null,
            instagram: null,
          }}
          work={"Diseñador Gráfico"}
        />
      </div>
    </section>
  );
};

export default Team;
