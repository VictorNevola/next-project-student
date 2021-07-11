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

    useEffect(() => localStorage.setItem("menuDropDownIsActive", JSON.stringify(activeDropdown)),[activeDropdown]);

    return (
        <>
            <Item>
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
                                                    <ALink className={subLink.urlLink === router.pathname && "is-active"}> 
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
                            <ALink className={urlLink === router.pathname && "is-active"}>
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