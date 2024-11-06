import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GameContext } from '../context/GameContext';
import '../css/ProviderModal.css'; 
import { GameProviderModel } from '../models/GameProviderModel';

interface ProviderModalProps {
  selectedProviders: Array<GameProviderModel>;
  onSelectProvider: (provider: GameProviderModel) => void;
  onDeselectProvider: (provider: GameProviderModel) => void;
  onClose: () => void;
}

const ProviderModal: React.FC<ProviderModalProps> = ({selectedProviders, onSelectProvider, onClose , onDeselectProvider }) => {
    const { gameProviders } = useContext(GameContext);

    const handleToggleProvider = (provider: GameProviderModel) => {
        if (selectedProviders.includes(provider)) {
        onDeselectProvider(provider); // Deselect provider
        } else {
          onSelectProvider(provider); // Select provider
        }
      };

  return (
    <div className="provider-modal-overlay">
      <div className="provider-modal">
        <div className="provider-modal-header">
          <h3>Select a Provider</h3>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="provider-list">
          {gameProviders.map((provider) => (
             <div
             key={provider.id}
             className={`provider-item ${selectedProviders.includes(provider) ? 'selected' : ''}`}
             onClick={() => handleToggleProvider(provider)}
           >
              <img src={provider.img} alt={provider.providerName} className="provider-image" />
              <div>{provider.providerName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderModal;
