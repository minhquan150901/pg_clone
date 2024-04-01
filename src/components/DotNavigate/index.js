import { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import './DotNavigate.GlobalStyles.scss';

function Dot() {
    const [visibleSection, setVisibleSection] = useState('');
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition <= 405) {
                setVisibleSection('first');
            } else if (scrollPosition <= 1050) {
                setVisibleSection('second');
            } else if (scrollPosition <= 1500) {
                setVisibleSection('third');
            } else if (scrollPosition <= 2600) {
                setVisibleSection('fourth');
            } else {
                setVisibleSection('hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);

        if (initialLoad) {
            handleScroll();
            setInitialLoad(false);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initialLoad]);

    return (
        <div className="dot-navigate">
            <button className={`dot-navigate-btn-${visibleSection}`}>
                <span className={`dot-navigate-btn-text-${visibleSection}`}>
                    {visibleSection === 'first' && 'Giới thiệu'}
                    {visibleSection === 'second' && 'Cam kết & Nỗ lực'}
                    {visibleSection === 'third' && 'Nỗ lực phát triển bền vững'}
                    {visibleSection === 'fourth' && 'Các trang web của P&G'}
                </span>
                <GoDotFill className={`dot-navigate-btn-icon-${visibleSection}`} />
            </button>
        </div>
    );
}

export default Dot;
