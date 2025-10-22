import { useEffect, type ReactNode } from 'react';
import * as React from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    closeOnOverlayClick?: boolean;
}
const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         children,
                                         title,
                                         closeOnOverlayClick = true,
                                     }) => {
    // Закрытие на Escape
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Блокируем скролл
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                {(title || closeOnOverlayClick) && (
                    <div className="modal-header justify-end">
                        {title && <h2 className="modal-title">{title}</h2>}
                        <button
                            className="modal-close-btn"
                            onClick={onClose}
                            aria-label="Закрыть модальное окно"
                        >
                            ×
                        </button>
                    </div>
                )}

                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;