import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}
export function GrupCard({title}: Props) {
    return (
        <Container>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>


    ); 
}