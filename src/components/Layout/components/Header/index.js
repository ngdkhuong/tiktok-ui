import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images/';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search acounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>{/* clear */}</button>
                    {/* Loading */}
                    <button className={cx('search-btn')}>{/* search */}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
