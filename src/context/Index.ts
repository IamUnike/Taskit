import { ReactNode, FC } from "react";

interface IComposeContext {
    components?: FC<{children?: ReactNode}> []
    children?: ReactNode | undefined
}

export default function ComposeContext(props : IComposeContext){

}