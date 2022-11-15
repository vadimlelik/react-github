import styles from './UserInfo.module.scss';
import {LocalGithubUser} from "../../types";
import {InfoItem, InfoItemProps} from "../InfoItem";
import {ReactComponent as IconCompany} from "assets/icon-company.svg";
import {ReactComponent as IconLocation} from "assets/icon-location.svg";
import {ReactComponent as IconTwitter} from "assets/icon-twitter.svg";
import {ReactComponent as IconWebSite} from "assets/icon-website.svg";

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {

}

export const UserInfo = ({blog, company, location, twitter}: UserInfoProps) => {
    const items: InfoItemProps[] = [
        {
            icon: <IconLocation/>,
            text: location,
        }, {
            icon: <IconCompany/>,
            text: company,
        }, {
            icon: <IconWebSite/>,
            text: blog,

        }, {
            icon: <IconTwitter/>,
            text: twitter,
        },
    ]

    return (
        <div className={styles.userInfo}>
            {items.map((item, index) => (<InfoItem key={index} icon={item.icon} text={item.text}/>))}
        </div>
    )
};
