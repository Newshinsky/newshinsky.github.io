import s from "./mySkills.module.css"
import "../../index.css"
import { SkillCard } from "./skillCard/SkillCard"
import { skillType } from "../../App"
type PropsType = {
    skills: Array<skillType>
}


export const MySkills = (props: PropsType) => {
    return (


        <div className="bodyColorBlack">
            <div id="MySkills" className="container">
                <div className={s.wrapper}>
                    <h2>My Skills</h2>
                    <p>The skills I currently possess
                    </p>
                    <div className={s.test}>
                        <SkillCard skills={props.skills} />
                    </div>
                </div>
            </div>
        </div>

    )
}