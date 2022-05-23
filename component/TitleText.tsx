import { Text } from 'react-native';
import { ITitleTextProps } from '../interfaces/TitleTextProps';

const TitleText = (props: ITitleTextProps) => {
    const {title, text} = props;

    return (
        <>
            <Text>Le titre en props : {title}</Text>
            <Text>...et le texte en props : {text}</Text>
        </>
    );
}

export default TitleText;