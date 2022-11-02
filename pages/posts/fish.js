import useSWR from "swr";

export default function Fish() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return data.results.map((character) => {
    return (
      <div key={character.id}>
        <div>{character.name}</div>
        <div>{character.species}</div>
      </div>
    );
  });
}
