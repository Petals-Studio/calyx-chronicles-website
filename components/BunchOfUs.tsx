import { characters } from '@/constants';
import React, { useState } from 'react'

export default function BunchOfUs() {
  const [character, setCharacter] = useState(characters[0]);

  const onClickArrow = (direction: 'prev' | 'next') => {
    setCharacter((currentCharacter) => {
      const _characterIndex = characters.findIndex(({ name }) => name === currentCharacter.name);

      const callbacks = {
        next() {
          return _characterIndex === (characters.length - 1)
            ? 0 
            : _characterIndex + 1;
        },
        prev() {
          return _characterIndex === 0
            ? (characters.length - 1)
            : _characterIndex - 1;
        }
      };
      
      const _nextCharacterIndex = callbacks[direction]();
      return characters[_nextCharacterIndex];
    })
  };
  
  return (
    <div className="flex justify-between items-end w-full bg-[#FF9AB1] pl-8 py-7 tablet:pl-[72px] tablet:pt-[154px] tablet:pb-[56px] desktop:pb-[120px]">
      <div className="max-w-[55%] mb-2">
        <h2 className="text-white font-bold text-[29px]/[24px] tablet:text-[64px]/[66px]">
          Bunch <br/>of us..
        </h2>
        <p className="text-[10px]/[20px] tablet:text-[24px]/[48px] font-bold text-[#b7002980]">
          {character.name} :
        </p>
        <p className="text-[10px]/[14px] tablet:text-[20px]/[normal] font-bold text-[#b7002980] tablet:mb-[30px]">
          {character.trivia}
        </p>
        <div className="inline-flex items-center">
          <button onClick={() => { onClickArrow('prev'); }} className="pr-[10px] cursor-pointer tablet:pr-6 tablet:h-[22px]">
            <svg className="h-[9px] tablet:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9" fill="none">
              <path d="M4.94724 0.580353L1 4.53121L4.94724 8.48206" stroke="white" strokeWidth="1.11854"/>
            </svg>
          </button>
          <span className="flex w-px h-3 tablet:h-6 bg-white opacity-30"></span>
          <button onClick={() => { onClickArrow('next'); }} className="pl-[10px] cursor-pointer tablet:pl-6 tablet:h-[22px]">
            <svg className="h-[9px] tablet:h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9" fill="none">
              <path d="M0.947252 0.580353L4.8945 4.53121L0.947252 8.48206" stroke="white" strokeWidth="1.11854"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-[40%]">
        <img loading="lazy" src={character.image} alt="Mr. Harem" className="w-full h-auto" />
      </div>
    </div>
  )
}
