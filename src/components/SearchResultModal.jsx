import React from "react";

const formatLabel = (key) =>
    key
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

const SearchResultModal = ({ isOpen, onClose, title, record }) => {
    if (!isOpen || !record) return null;

    const entries = Object.entries(record).filter(([, value]) => value !== null && value !== undefined && value !== "");

    return (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
            <div className="modal-card">
                <div className="modal-header">
                    <div>
                        <span className="pill-chip">
                            <i className="bi bi-search"></i> Match found
                        </span>
                        <h3 className="section-title mt-2 mb-0">{title}</h3>
                    </div>
                    <button type="button" className="modal-close" onClick={onClose} aria-label="Close dialog">
                        ×
                    </button>
                </div>

                <div className="modal-body">
                    {entries.map(([key, value]) => (
                        <div className="detail-row" key={key}>
                            <span className="detail-label">{formatLabel(key)}</span>
                            <span className="detail-value">{String(value)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResultModal;
