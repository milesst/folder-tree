import { Folder } from "./Folder";

export type FolderNode = {
    folder?: Folder,
    parentNode?: FolderNode,
    depth: number,
    childrenNodes: FolderNode[] | Folder[],
    visited: boolean,
    open: boolean,
    selected?: boolean
}