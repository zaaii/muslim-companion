import { Stack } from '@chakra-ui/react';
import { Verse } from '../../interfaces/Verse';
import VerseContent from './VerseContent';
import VerseHeader from './VerseHeader';

interface Props {
  verses: Verse[]
}

export default function VerseList({ verses }: Props) {
  return (
    <Stack spacing={6} py="4">
      {verses.map((verse) => (
        <Stack key={verse.number.inSurah}>
          <VerseHeader
            number={verse.number.inQuran}
            audioSrc={new Audio(verse.audio.primary)}
          />
          <VerseContent
            arabText={verse.text.arab}
            englishText={verse.text.transliteration.en}
            translationInID={verse.translation.id}
          />
        </Stack>
      ))}
    </Stack>
  );
}
