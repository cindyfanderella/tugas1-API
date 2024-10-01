<<<<<<< HEAD
'use client';

interface ViewUserButtonProps {
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => alert(`user id: ${userId}`);

    return (
        <>
        <button onClick={handleClick}>Lihat User</button>
        </>
    );
};

=======
'use client';

interface ViewUserButtonProps {
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
    const handleClick = () => alert(`user id: ${userId}`);

    return (
        <>
        <button onClick={handleClick}>Lihat User</button>
        </>
    );
};

>>>>>>> 37988f451b4efe2b8d7df13720f6062aaf75f4d5
export default ViewUserButton;