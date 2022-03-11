import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    }
    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    const clickLogo = () => {
        document.location.reload();
    }
    return (
        <header className={styles.header}>
            <div className={styles.start} onClick={clickLogo}>
                <img className={styles.img} src="/images/logo.png"></img>
                <h2 className={styles.title}>Youtube</h2>
            </div>
            <div className={styles.center}>
                <input 
                    ref={inputRef}
                    className={styles.input} 
                    type="search" 
                    placeholder="Search..."
                    onKeyPress={onKeyPress} 
                />
                <button className={styles.button} type="submit" onClick={onClick}>
                    <img
                        className={styles.buttonImg} 
                        src="/images/search.png" 
                        alt="search" 
                    />    
                </button>
            </div>
            <div className={styles.end}>
                <img className={styles.userImg} src="/images/user.png"></img>
            </div>
        </header>
    )
}

export default SearchHeader;