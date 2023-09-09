export interface ICreateTask {
    title?: string
    description?: string
    date?: string | Date | null
    status?: string
    priority?: string
    setTitle?: (value: string) => void
    setDate?: any
    setDescription?: (value: string) => void;
    setStatus?: (value: string) => void
    setPriority?: (value: string) => void
}

