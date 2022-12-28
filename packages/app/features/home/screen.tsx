import { A, H1, P, Text, TextLink } from '../../design/typography';
import { Row } from '../../design/layout';
import { View } from '../../design/view';

import { MotiLink } from 'solito/moti';
import Switcher from '../../components/Switcher';

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-3 dark:bg-black dark:text-white">
      <Switcher />
      <H1 className="dark:text-white">Welcome to Solito.</H1>
      <View className="max-w-xl">
        <P className="text-center dark:text-slate-400">
          Here is a basic starter to show you how you can navigate from one screen to another. This screen uses the same
          code on Next.js and React Native.
        </P>
        <P className="text-center dark:text-slate-400">
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Fernando Rojo
          </A>
          .
        </P>
        <P className="text-center dark:text-slate-400">
          NativeWind is made by{' '}
          <A
            href="https://twitter.com/mark__lawlor"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Mark Lawlor
          </A>
          .
        </P>
      </View>
      <View className="h-[32px]" />
      <Row className="space-x-8">
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet';

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            };
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text selectable={false} className="text-base font-bold dark:text-slate-400">
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  );
}
