import React, { useState } from 'react';

interface IButton {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({
  label,
  isActive,
  onClick
}) => {
  return (
    <button className={isActive ? 'btn btn-active' : 'btn'} onClick={onClick}>
      {label}
    </button>
  )
}

const Buttons: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('Jobs');

  const handleButtonClick = (label: string) => {
    setSelectedButton(label);
  }

  const buttons = [
    { label: 'Alles', value: 'alles'},
    { label: 'Schule', value: 'schule'},
    { label: 'Universität', value: 'universität'},
    { label: 'Jobs', value: 'jobs'},
    { label: 'Musik', value: 'musik'},
    { label: 'IT', value: 'it'},
    { label: 'Privat', value: 'privat'},
  ]

  return (
    <>
      <div className="btn-group">
        {buttons.map(button => (
          <Button 
            key={button.value}
            label={button.label}
            isActive={selectedButton === button.label}
            onClick={() => handleButtonClick(button.label)}
          />
        ))}
      </div>
    </>
  );
};

export default Buttons;