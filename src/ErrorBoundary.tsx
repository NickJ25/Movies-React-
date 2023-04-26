import { Component } from "react";


interface errorBoundaryProps {
    children: React.ReactNode;
    errorUI?: React.ReactNode;
}

interface errorBoundaryState{
    hasError: boolean;
    message: string;
}


class ErrorBoundary extends Component<errorBoundaryProps, errorBoundaryState>
{
    constructor(props: errorBoundaryProps){
        super(props);
        this.state = {hasError: false, message: ''}
    }

    static getDerivedStateFromError(error: any){
        return{ hasError: true, message: error }
    }

    componentDidCatch(error: any, errorInfo: any){
        console.log(error);
    }

    render(): React.ReactNode {
        if(this.state.hasError){
            if(this.props.errorUI){
                return this.props.errorUI;
            } else {
                return <h3>{this.state.message}</h3>
            }
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;