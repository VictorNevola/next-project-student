declare module 'react-input-mask' {

    export interface Selection {
        start: number;
        end: number;
    }

    export interface InputState {
        value: string;
        selection: Selection | null;
    }

    export interface BeforeMaskedStateChangeStates {
        previousState: InputState;
        currentState: InputState;
        nextState: InputState;
    }

    export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

        mask: string | Array<(string | RegExp)>;

        maskPlaceholder?: string | null;

        alwaysShowMask?: boolean;

        inputRef?: React.Ref<HTMLInputElement>;

        maskChar?: string | null;

        beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
    }

    export class ReactInputMask extends React.Component<Props> {
    }

    export default ReactInputMask;
}