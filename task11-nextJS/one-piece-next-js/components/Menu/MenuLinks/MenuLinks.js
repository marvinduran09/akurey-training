import React from 'react'
import Link from "next/link";
import menuLinkStyle from "../../../styles/menuLinks.module.scss";

function MenuLinks() {
  return (
    <div className='container'>
      <div className={menuLinkStyle.menuOptions}>
        <Link href="/"><a className={menuLinkStyle.menuOption}>Home</a></Link>
        <Link href="/characters"><a className={menuLinkStyle.menuOption}>Characters</a></Link>
        <Link href="/islands"><a className={menuLinkStyle.menuOption}>Islands</a></Link>
        <Link href="/mistobjects"><a className={menuLinkStyle.menuOption}>Mist Objects</a></Link>
      </div>
    </div>
  )
}

export default MenuLinks;