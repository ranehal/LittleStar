import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { themes, levels } from '../../packages/shared/themes';
import { Star, Settings, BookOpen, Target, Palette } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('verdant');
  const theme = (themes as any)[currentTheme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Star color={theme.accent} size={32} />
            <Text style={[styles.title, { color: theme.text }]}>Little Star</Text>
          </View>
          <View style={styles.icons}>
            <Settings color={theme.text} size={24} style={styles.icon} />
          </View>
        </View>

        {/* Learning Levels */}
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: `${theme.accent}33` }]}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>Start Learning</Text>
          <View style={styles.grid}>
            {levels.map(level => (
              <TouchableOpacity 
                key={level}
                style={[styles.levelButton, { backgroundColor: `${theme.accent}22` }]}
              >
                <Text style={{ color: theme.accent, fontWeight: '600' }}>{level}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Theme Switcher */}
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: `${theme.accent}33` }]}>
          <View style={styles.cardHeader}>
            <Palette color={theme.accent} size={20} />
            <Text style={[styles.cardTitle, { color: theme.text, marginLeft: 8 }]}>Themes</Text>
          </View>
          <View style={styles.grid}>
            {Object.keys(themes).map(t => (
              <TouchableOpacity 
                key={t}
                onPress={() => setCurrentTheme(t)}
                style={[
                  styles.themeButton, 
                  { backgroundColor: (themes as any)[t].bg },
                  currentTheme === t && { borderWidth: 2, borderColor: (themes as any)[t].accent }
                ]}
              >
                <Text style={{ color: (themes as any)[t].text, fontSize: 12 }}>
                  {(themes as any)[t].name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={[styles.footer, { color: theme.text, opacity: 0.5 }]}>
          © 2026 Little Star. Mobile Version.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    letterSpacing: -1,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  card: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
  levelButton: {
    width: (width - 100) / 3,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  themeButton: {
    width: (width - 100) / 2,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    margin: 5,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  }
});
