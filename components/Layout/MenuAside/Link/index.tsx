import { Item, HR, DropDownIcon, OpenDropdown, ListDropDown, ItemDropdown, ALink } from './style';
import { useState, useEffect } from 'react';
import InlineSVG from 'svg-inline-react';
import Link from "next/link";
import { useRouter } from 'next/router';

import { IlinkMenu } from '../types';

export const LinkMenu = ({ titleLink, urlLink, svgLink, hasSubMenu, linksSubMenu }: IlinkMenu) => {
    
    const router = useRouter();

    const [activeDropdown, setActiveDropdown] = useState(JSON.parse(localStorage.getItem("menuDropDownIsActive") || "false"));
    const setDropdown = () => activeDropdown ? setActiveDropdown(false) : setActiveDropdown(true);
    const [linkActive, setLinkActive] = useState(router.pathname === urlLink);

    useEffect(() => localStorage.setItem("menuDropDownIsActive", JSON.stringify(activeDropdown)),[activeDropdown]);
    useEffect(() => setLinkActive(router.pathname === urlLink) , [router.pathname]);
    
    return (
        <>
            <Item className={linkActive && "is-active"}>
                {
                    hasSubMenu && linksSubMenu ?
                        <>
                            <OpenDropdown onClick={() => setDropdown()}>
                                <InlineSVG src={svgLink} />
                                {titleLink}
                                <DropDownIcon isActive={activeDropdown} />
                            </OpenDropdown>
                            <ListDropDown isActive={activeDropdown}>
                                {
                                    linksSubMenu.map((subLink, index) => {
                                        return (
                                            <ItemDropdown key={index}>
                                                <Link href={subLink.urlLink}>
                                                    <ALink> 
                                                        {subLink.titleLink}
                                                    </ALink>
                                                </Link>
                                            </ItemDropdown>
                                        )
                                    })
                                }
                            </ListDropDown>
                        </>
                        :
                        <Link href={urlLink}>
                            <ALink>
                                <InlineSVG src={svgLink} />
                                {titleLink}
                            </ALink>
                        </Link>
                }
            </Item>

            <HR />
        </>
    )

}