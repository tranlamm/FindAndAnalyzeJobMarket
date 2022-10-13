import { memo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar({ onClick }) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            setSearch('');
            onClick(search);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <input
                type="text"
                value={search}
                placeholder="Search..."
                className={cx('input')}
                onKeyDown={handleSearch}
                onChange={(e) => setSearch(e.target.value)}
                spellCheck={false}
            />
            <div className={cx('search')}></div>
        </div>
    );
}

export default memo(SearchBar);
