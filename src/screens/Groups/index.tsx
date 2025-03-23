import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GrupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container } from "./styles";

export default function Groups() {
    const [groups, setGroups] = useState([]);

    return (
        <Container>
            <Header />
            <Highlight 
            title="Turmas" 
            subtitle="jogue com a sua turma" />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                <GrupCard 
                    title={item} 
                />
                )}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message="Que tal cadastrar a primeira turma?" 
                    />
                )} 
            />
        </Container>
    );
}

