import { ReactNode } from 'react';

export type ToggleCardProps = {
    selectedId  : string;
    cardId      : string;
    onSelect    : (cardId: string) => void;
    content     : ReactNode;
    contentExtra: ReactNode;
    width      ?: string | number;
} 

export type ToggleCardState = {
    isOpened: boolean;
}