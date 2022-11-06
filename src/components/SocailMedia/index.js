import React, { useEffect, useState } from "react";
import axios from "axios";
import { SocialMediaSection, Social, Icon, Paragraph, Span } from "./style.js";

const SocailMedia = () => {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then(res => { setSocials(res.data.social); });
    }, []);

    const socialList = socials.map((socialItem) => {
        return (
            <Social key={socialItem.id} type={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <Paragraph>
                    <Span>{socialItem.title}</Span>
                    <Span info2>{socialItem.body}</Span>
                </Paragraph>
            </Social>
        );

    });
    return (
        <SocialMediaSection>

            {socialList}
        </SocialMediaSection>
    );
};

export default SocailMedia;
