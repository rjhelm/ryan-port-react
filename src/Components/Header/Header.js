/* eslint-disable array-callback-return */
import React from 'react';
import styles from './header.module.css';
// import Avatar from '@material-ui/core/Avatar';
// import avatar from '../../assets/images/avatar.jpg';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         '& > *': {
//             margin: theme.spacing(10),
//         },
//     },
//     large: {
//         width: theme.spacing(7),
//         height: theme.spacing(7),
//     }
// }));

const Header = ({ list }) => {
    // const classes = useStyles();
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <h4>Ryan Helm</h4>
                {/* <Avatar src={avatar} className={classes.large} variant="square" alt="Ryan" /> */}
            </div>
            <nav className={styles.nav}>
                <ul>
                    {list.map((item, index) => [
                        <li key={index + 1} className={styles.naveLink}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ])}
                </ul>
            </nav>
        </div>
    )
}

export default Header;