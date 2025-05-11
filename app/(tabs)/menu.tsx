// app/(tabs)/menu.tsx
import { Text, View, Button } from 'react-native';

export default function MenuScreen() {

  return (
    <View>
      <Text>ユーザー名 さん</Text>
      <Button title="プロフィール設定" onPress={() => {/* 画面遷移 */}} />
      <Button title="出店ページ" onPress={() => {/* 画面遷移 */}} />
      <Button title="購入履歴" onPress={() => {/* 画面遷移 */}} />
    </View>
  );
}
