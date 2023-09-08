import { useLocalSearchParams, router } from 'expo-router';
import React from 'react';
import { TextInput, View } from 'react-native';

export default function Search() {
  const params = useLocalSearchParams<{ q?: string }>();
  const [search, setSearch] = React.useState(params.q);

  return (
    <TextInput
      value={search}
      onChangeText={search => {
        setSearch(search);
        router.setParams({ q: search });
      }}
      placeholderTextColor="#A0A0A0"
      placeholder="Search"
      style={{
        borderRadius: 12,
        backgroundColor: '#fff',
        fontSize: 24,
        color: '#000',
        margin: 12,
        padding: 16,
      }}
    />
  );
}
