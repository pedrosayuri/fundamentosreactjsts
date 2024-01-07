import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className = {styles.comment}>
            <Avatar 
                hasBorder = {false}
                src = "https://github.com/diego3g.png"
                alt = "" 
            />

            <div className = {styles.commentBox}>
                <div className = {styles.commentContent}>
                    <header>
                        <div className = {styles.authorAndTime}>
                            <strong>Yuri Pedrosa</strong>
                            <time title = "1 de Janeiro às 21:31" dateTime = "2024-01-04 21:31">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title = "Deletar comentário">
                            <Trash size = {24} />
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}