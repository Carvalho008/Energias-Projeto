import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Comece a Explorar</ThemedText>
      </ThemedView>
      <ThemedText>Esse app tem exemplo de código para te ajudar a começar.</ThemedText>
      <Collapsible title="Rotas baseadas em arquivos">
        <ThemedText>
          Esse app tem três telas:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>,{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText> e {' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/lista.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          O arquivo de layout em <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          configura as tabs do navegador.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Suporte para Android, iOS, e web">
        <ThemedText>
          Você pode abrir esse projeto em Android, iOS, e na web. Para abrir a versão web, pressione{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> no terminal enquanto roda esse projeto.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Imagens">
        <ThemedText>
          Para imagens estáticas você pode usar os sufixos <ThemedText type="defaultSemiBold">@2x</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> utilizando arquivos para diferentes dimensões de telas.
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Fontes personalizadas">
        <ThemedText>
          Abra o arquivo <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> para ver como usar{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            fontes personalizadas como essa.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Componentes de modo claro e escuro">
        <ThemedText>
          Esse template tem suporte para modo claro e escuro. A configuração do{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> nos permite descobrir qual o tema de cores atual do usuário,
           com isso você pode trocar as cores dependendo do tema.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animações">
        <ThemedText>
          Esse template inclui um exemplo de componente animado. O componente{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> usa a poderosa biblioteca{' '}
          <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          para criar uma animação de mão dando "tchau".
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
