import { useState, useEffect } from "react";
import './ImageModal.css';

export const ImageModal = ( {src} ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const [zoomOrigin, setZoomOrigin] = useState('center center');

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => document.body.style.overflow = "";
    }, [isOpen]);

    const handleModalClick = () => {
        if (!zoomed) setIsOpen(false);
    };

    const handleImageClick = (e) => {
        e.stopPropagation();

        const isDesktop = window.innerWidth > 768;

        if (!isDesktop) {
            setIsOpen(false);
            return;
        }

        if (!zoomed) {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setZoomOrigin(`${x}% ${y}%`);
        }

        setZoomed(!zoomed);
    };

    return (
        <>
        <div className={isOpen ? "blurred" : ""}>
            <img src={src} className="thumbnail" onClick={() => setIsOpen(true)}/>
        </div>

        {isOpen && (
            <div className="modal" onClick={handleModalClick}>
                <img src={src} className={`modal-img ${zoomed ? "zoomed" : ""}`} onClick={handleImageClick} style={{ "--zoom-origin": zoomOrigin }} />
            </div>
        )}
        </>
    )
}