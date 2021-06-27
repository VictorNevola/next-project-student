import React from 'react';
import * as Style from './style';
import { IoMdNotificationsOutline } from 'react-icons/io';

interface props {
  titlePage: string
}

const Header = ({ titlePage }: props) => {

  return (
      <Style.Header>
          <Style.PageTitle>
              { titlePage }
          </Style.PageTitle>

          <Style.Notification>
              <Style.btnOpenNotification> 
                  <IoMdNotificationsOutline />
              </Style.btnOpenNotification>
          </Style.Notification>

      </Style.Header>
  )

}

export default Header;