import React from "react";
import Slider from "../Slider/Slider";
import SectionStrengths from "../SectionStrengths/Serction-strengths";
import SectionFAQ from "../SectionFAQ/SectionFAQ";
import SectionWhere from "../SectionWhere/SectionWhere";


export default function Main(){


    return (
        <>
            <Slider/>
            <div className="wrapper">
                <SectionStrengths/>
                <SectionFAQ/>
                <SectionWhere/>
            </div>
        </>
    );
};
