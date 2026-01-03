
import { TimelineEvent, DecisionPoint } from '../types';

export const DECISION_POINTS: DecisionPoint[] = [
  {
    id: 'wp-sarajevo',
    title: 'The Failed Assassination',
    eventContext: 'June 28, 1914: The assassination of Archduke Franz Ferdinand.',
    whatIfQuestion: 'What if Gavrilo Princip had missed his shot or the motorcade had taken the correct route?'
  },
  {
    id: 'wp-dunkirk',
    title: 'Dunkirk Total Collapse',
    eventContext: '1940: The evacuation of Allied troops from the beaches of Dunkirk.',
    whatIfQuestion: 'What if the German Panzer divisions had not been halted by the "Stop Order" and had destroyed the BEF on the beaches?'
  },
  {
    id: 'wp-midway',
    title: 'The Defeat at Midway',
    eventContext: '1942: The Battle of Midway in the Pacific Theater.',
    whatIfQuestion: 'What if the Japanese Imperial Navy had successfully destroyed the US aircraft carriers?'
  },
  {
    id: 'wp-barbarossa',
    title: 'A Moscow Victory',
    eventContext: '1941: Operation Barbarossa and the German advance on Moscow.',
    whatIfQuestion: 'What if Moscow had fallen before the onset of the Russian winter?'
  },
  {
    id: 'wp-normandy',
    title: 'Operation Overlord Failure',
    eventContext: 'June 6, 1944: The D-Day landings in Normandy.',
    whatIfQuestion: 'What if the Normandy landings had been repelled by the Atlantic Wall defenses?'
  }
];

export const HISTORY_EVENTS: TimelineEvent[] = [
  // ... (keeping all existing events)
  // --- PRE_WWI ---
  {
    id: 'franco-prussian',
    year: '1870-1871',
    title: 'The Franco-Prussian War',
    shortDescription: 'The unification of Germany and the shift in European power.',
    fullContent: 'The defeat of France by the Prussian-led German states led to the unification of Germany and the creation of the German Empire under Kaiser Wilhelm I. This shifted the balance of power in Europe, leaving France seeking revenge (revanche) and setting the stage for the complex alliance systems of the early 20th century. The annexation of Alsace-Lorraine by Germany would remain a point of bitter contention for decades, fueling French nationalism and distrust of the newly unified German state.',
    period: 'PRE_WWI',
    location: 'Sedan, France',
    coordinates: [49.7027, 4.9407]
  },
  {
    id: 'scramble-africa',
    year: '1884-1885',
    title: 'The Berlin Conference',
    shortDescription: 'Imperialist competition and the Scramble for Africa.',
    fullContent: 'European powers met in Berlin to divide the African continent among themselves. This "Scramble for Africa" intensified imperial competition and created deep-seated tensions between Britain, France, and Germany over colonial territories and resources. The artificial borders drawn during this time, often ignoring linguistic and cultural boundaries, would lead to countless ethnic and political conflicts in the following century. It represented the peak of 19th-century European imperialism.',
    period: 'PRE_WWI',
    location: 'Berlin, Germany',
    coordinates: [52.5200, 13.4050]
  },
  {
    id: 'triple-alliance',
    year: '1882',
    title: 'The Triple Alliance',
    shortDescription: 'The formation of the first major alliance block.',
    fullContent: 'Germany, Austria-Hungary, and Italy formed a secret alliance promising mutual support in the event of an attack by any other great power. This was a defensive move initiated by Otto von Bismarck to isolate France and secure German borders. However, this secret diplomacy inadvertently contributed to the polarization of Europe into two armed camps, making a localized conflict far more likely to spiral into a general European war.',
    period: 'PRE_WWI',
    location: 'Vienna, Austria',
    coordinates: [48.2082, 16.3738]
  },
  {
    id: 'dreadnought',
    year: '1906',
    title: 'Launch of HMS Dreadnought',
    shortDescription: 'The start of the naval arms race.',
    fullContent: 'Britain launched a new class of battleship that rendered all existing ships obsolete due to its "all-big-gun" armament and steam turbine propulsion. This triggered a frantic naval arms race with Germany, as both nations poured immense industrial resources into building massive fleets. The naval rivalry became a primary source of friction and public paranoia between the two empires, significantly increasing the risk of conflict.',
    period: 'PRE_WWI',
    location: 'Portsmouth, UK',
    coordinates: [50.8167, -1.0833]
  },
  {
    id: 'balkan-crises',
    year: '1908-1913',
    title: 'The Balkan Crises',
    shortDescription: 'The "Powder Keg of Europe" begins to smoke.',
    fullContent: 'The annexation of Bosnia by Austria-Hungary in 1908 and the subsequent Balkan Wars (1912-1913) led to the sharp decline of Ottoman influence and the rise of a powerful, expansionist Serbia. These events fostered deep-seated nationalism and brought Russia—the self-appointed protector of the Slavs—and Austria-Hungary into direct geopolitical conflict. By 1914, the region was widely recognized as the most dangerous flashpoint in the world.',
    period: 'PRE_WWI',
    location: 'The Balkans',
    coordinates: [42.0000, 21.0000]
  },

  // --- WWI ---
  {
    id: 'sarajevo',
    year: 'June 28, 1914',
    title: 'The Assassination in Sarajevo',
    shortDescription: 'The spark that ignited the Great War.',
    fullContent: 'Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, was assassinated by Gavrilo Princip, a member of the "Young Bosnia" nationalist group. This event triggered the "July Crisis," a series of diplomatic failures and ultimatums. Within a month, the major powers of Europe were dragged into a total war as alliance obligations were activated. What began as a regional dispute between Austria-Hungary and Serbia quickly escalated into a global catastrophe.',
    period: 'WWI',
    location: 'Sarajevo, Bosnia',
    coordinates: [43.8563, 18.4131]
  },
  {
    id: 'schlieffen-plan',
    year: 'August 1914',
    title: 'The Schlieffen Plan Execution',
    shortDescription: 'Germany\'s gamble for a quick victory.',
    fullContent: 'Germany invaded neutral Belgium to bypass French border fortifications and knock France out of the war quickly. The plan, designed to avoid a two-front war, failed at the Battle of the Marne when French and British forces halted the German advance. This led to the "Race to the Sea" and the establishment of a static line of trenches stretching from Switzerland to the North Sea, which would remain largely unchanged for nearly four years.',
    period: 'WWI',
    location: 'The Marne, France',
    coordinates: [48.9167, 4.3667]
  },
  {
    id: 'trench-warfare-hell',
    year: '1915-1917',
    title: 'Stalemate on the Western Front',
    shortDescription: 'The grueling reality of industrial attrition.',
    fullContent: 'For years, millions of men lived in squalid, muddy trenches. Major offensives like the Somme and Verdun resulted in hundreds of thousands of casualties for negligible territorial gains. The introduction of poison gas, tanks, and aircraft transformed warfare into an industrial process of slaughter. The psychological toll, known then as "shell shock," affected an entire generation of young men.',
    period: 'WWI',
    location: 'Verdun, France',
    coordinates: [49.1667, 5.3833]
  },
  {
    id: 'gallipoli',
    year: '1915',
    title: 'The Gallipoli Campaign',
    shortDescription: 'A disastrous Allied attempt to open the Dardanelles.',
    fullContent: 'British, French, and ANZAC (Australian and New Zealand Army Corps) forces launched an ambitious amphibious invasion of the Ottoman Empire. The goal was to secure a sea route to Russia and knock the Ottomans out of the war. The campaign was a bloody failure, resulting in over 250,000 casualties and a surge of national identity for Australia, New Zealand, and the emerging modern state of Turkey. It demonstrated the extreme difficulty of amphibious warfare against entrenched defenders.',
    period: 'WWI',
    location: 'Gallipoli, Turkey',
    coordinates: [40.4167, 26.6667]
  },
  {
    id: 'jutland',
    year: '1916',
    title: 'The Battle of Jutland',
    shortDescription: 'The only major naval engagement of the war.',
    fullContent: 'The British Grand Fleet and the German High Seas Fleet clashed in the North Sea in a massive display of naval power. While the battle was tactically inconclusive and Britain suffered higher tonnage losses, it confirmed British naval supremacy and the effectiveness of the blockade. The German fleet largely remained in port for the rest of the war, leading Germany to rely increasingly on unrestricted submarine warfare to break British supply lines.',
    period: 'WWI',
    location: 'Jutland Bank, North Sea',
    coordinates: [56.7000, 5.8667]
  },
  {
    id: 'russian-revolution',
    year: '1917',
    title: 'The Russian Revolutions',
    shortDescription: 'The fall of the Romanovs and the rise of the Soviets.',
    fullContent: 'Economic collapse and war-weariness led to the overthrow of the Tsar. The subsequent Bolshevik Revolution, led by Vladimir Lenin, resulted in Russia signing the Treaty of Brest-Litovsk and withdrawing from the war. This allowed Germany to move its Eastern armies to the Western Front for a final, desperate offensive, while also marking the birth of the first communist state in history.',
    period: 'WWI',
    location: 'Petrograd (St. Petersburg), Russia',
    coordinates: [59.9343, 30.3351]
  },
  {
    id: 'zimmerman',
    year: '1917',
    title: 'The Zimmerman Telegram',
    shortDescription: 'Germany\'s secret proposal to Mexico.',
    fullContent: 'British intelligence intercepted a telegram from German Foreign Minister Arthur Zimmermann promising Mexico the return of Texas, New Mexico, and Arizona if they joined the war against the United States. This provocative message, combined with Germany\'s return to unrestricted submarine warfare, finally pushed the previously isolationist United States to declare war on Germany in April 1917, bringing its massive industrial capacity to the Allied side.',
    period: 'WWI',
    location: 'Washington D.C., USA',
    coordinates: [38.9072, -77.0369]
  },
  {
    id: 'hundred-days',
    year: '1918',
    title: 'The Hundred Days Offensive',
    shortDescription: 'The final Allied push to victory.',
    fullContent: 'A series of massive Allied offensives, bolstered by fresh American troops, broke the German Hindenburg Line and forced a general retreat. Combined with internal unrest in Germany and the total collapse of its allies (Bulgaria, the Ottoman Empire, and Austria-Hungary), the German high command was forced to seek an armistice. The guns finally fell silent on November 11, 1918.',
    period: 'WWI',
    location: 'Amiens, France',
    coordinates: [49.8942, 2.2957]
  },

  // --- INTERWAR ---
  {
    id: 'versailles-treaty',
    year: '1919',
    title: 'The Treaty of Versailles',
    shortDescription: 'The controversial settlement of the Great War.',
    fullContent: 'The treaty officially ended the war but imposed staggering reparations, territorial losses, and a "War Guilt" clause on Germany. While it created the League of Nations as a forum for peace, it also sowed the seeds of future conflict by leaving Germany humiliated, economically crippled, and vengeful. Many historians view the treaty not as a peace but as a "twenty-year truce."',
    period: 'INTERWAR',
    location: 'Versailles, France',
    coordinates: [48.8049, 2.1204]
  },
  {
    id: 'weimar-hyperinflation',
    year: '1923',
    title: 'Hyperinflation in Germany',
    shortDescription: 'The total collapse of the German currency.',
    fullContent: 'Unable to pay war reparations, the Weimar Republic printed massive amounts of money, leading to hyperinflation so severe that a loaf of bread cost billions of marks. Savings were wiped out in days, and the middle class was devastated. This economic trauma destroyed public faith in democratic institutions and made the radical promises of extremist parties, like the Nazis, far more attractive.',
    period: 'INTERWAR',
    location: 'Berlin, Germany',
    coordinates: [52.5200, 13.4050]
  },
  {
    id: 'great-depression',
    year: '1929',
    title: 'The Great Depression',
    shortDescription: 'A global economic disaster with political fallout.',
    fullContent: 'The 1929 stock market crash in the US triggered a worldwide economic collapse. In Germany, unemployment soared to 6 million. This desperation led to the final collapse of the Weimar Republic and provided the perfect conditions for the rise of totalitarian regimes in Germany, Japan, and Italy, as people sought "strong" leaders to restore order and prosperity.',
    period: 'INTERWAR',
    location: 'Wall Street, New York',
    coordinates: [40.7067, -74.0117]
  },
  {
    id: 'reichstag-fire',
    year: '1933',
    title: 'The Reichstag Fire',
    shortDescription: 'The catalyst for Nazi totalitarianism.',
    fullContent: 'A fire at the German parliament building allowed Hitler, who had recently been appointed Chancellor, to declare a state of emergency. He used the event to suspend civil liberties, arrest political opponents, and pass the "Enabling Act," which granted him absolute dictatorial power. Within months, Germany was a one-party state.',
    period: 'INTERWAR',
    location: 'Reichstag, Berlin',
    coordinates: [52.5186, 13.3761]
  },
  {
    id: 'guernica',
    year: '1937',
    title: 'The Bombing of Guernica',
    shortDescription: 'A preview of total aerial warfare.',
    fullContent: 'During the Spanish Civil War, the German Luftwaffe bombed the civilian town of Guernica to support General Franco\'s Nationalists. The atrocity shocked the world and became a symbol of the horrors of modern "total war"—where civilians were viewed as legitimate military targets. It served as a terrifying "dress rehearsal" for the aerial bombing campaigns of WWII.',
    period: 'INTERWAR',
    location: 'Guernica, Spain',
    coordinates: [43.3167, -2.6833]
  },

  // --- WWII ---
  {
    id: 'blitzkrieg-poland',
    year: '1939',
    title: 'The Invasion of Poland',
    shortDescription: 'The war begins with a new type of combat.',
    fullContent: 'Germany utilized "Blitzkrieg" (Lightning War)—a highly coordinated use of tanks, motorized infantry, and air power—to crush Polish defenses in just weeks. Following a secret agreement with Hitler, the Soviet Union invaded from the east shortly after. Britain and France, having pledged to protect Poland, declared war on Germany on September 3, 1933, officially starting World War II.',
    period: 'WWII',
    location: 'Westerplatte, Poland',
    coordinates: [54.4075, 18.6672]
  },
  {
    id: 'dunkirk-evac',
    year: '1940',
    title: 'The Miracle of Dunkirk',
    shortDescription: 'The rescue of the British Expeditionary Force.',
    fullContent: 'As France collapsed under the German onslaught, over 330,000 British and French troops were trapped on the beaches of Dunkirk. A massive, improvised flotilla of naval and civilian vessels evacuated the troops across the Channel under heavy fire. While a tactical defeat, it was a strategic triumph, preserving the core of the British army to defend the UK and eventually liberate Europe.',
    period: 'WWII',
    location: 'Dunkirk, France',
    coordinates: [51.0333, 2.3667]
  },
  {
    id: 'battle-of-britain',
    year: '1940',
    title: 'The Battle of Britain',
    shortDescription: 'Air supremacy over the United Kingdom.',
    fullContent: 'The Royal Air Force (RAF) defended the UK against a massive aerial campaign by the German Luftwaffe. Hitler aimed to gain air superiority as a precursor to a sea-borne invasion. The RAF\'s success, aided by the new technology of radar, forced Hitler to indefinitely postpone the invasion, marking the first major defeat for the German military.',
    period: 'WWII',
    location: 'London, UK',
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 'operation-barbarossa',
    year: '1941',
    title: 'Operation Barbarossa',
    shortDescription: 'The invasion of the Soviet Union.',
    fullContent: 'Hitler broke the non-aggression pact and launched the largest land invasion in human history against the USSR. While initially successful, the invasion stalled at the gates of Moscow due to fierce Soviet resistance and the onset of the brutal Russian winter. This opened the massive Eastern Front, which would ultimately consume the majority of the German army\'s resources and manpower.',
    period: 'WWII',
    location: 'Brest-Litovsk, Belarus',
    coordinates: [52.1333, 23.6667]
  },
  {
    id: 'pearl-harbor',
    year: '1941',
    title: 'The Attack on Pearl Harbor',
    shortDescription: 'A date which will live in infamy.',
    fullContent: 'The Imperial Japanese Navy launched a surprise strike against the U.S. Pacific Fleet in Hawaii. The attack was intended to prevent the US from interfering with Japanese expansion in Southeast Asia. Instead, it brought the United States into the war with a unified and furious public, bringing the full weight of American industrial power to the Allied cause.',
    period: 'WWII',
    location: 'Pearl Harbor, Hawaii',
    coordinates: [21.3647, -157.9492]
  },
  {
    id: 'stalingrad',
    year: '1942-1943',
    title: 'The Battle of Stalingrad',
    shortDescription: 'The turning point of the Eastern Front.',
    fullContent: 'In one of the bloodiest battles in history, Soviet forces surrounded and destroyed the German 6th Army. It was a catastrophic defeat for Germany and marked the end of their eastward advance. From this point on, the Soviet Red Army began a relentless westward push that would only end in Berlin.',
    period: 'WWII',
    location: 'Volgograd (Stalingrad), Russia',
    coordinates: [48.7080, 44.5133]
  },
  {
    id: 'el-alamein',
    year: '1942',
    title: 'The Battle of El Alamein',
    shortDescription: 'Turning the tide in North Africa.',
    fullContent: 'British General Bernard Montgomery defeated Erwin Rommel\'s "Afrika Korps" in the deserts of Egypt. This victory prevented the Axis from reaching the Suez Canal and the oil fields of the Middle East. It marked the "end of the beginning" for the Allies in the Mediterranean theater.',
    period: 'WWII',
    location: 'El Alamein, Egypt',
    coordinates: [30.8333, 28.9500]
  },
  {
    id: 'holocaust-industrial-death',
    year: '1941-1945',
    title: 'The Holocaust (Shoah)',
    shortDescription: 'State-sponsored industrial mass murder.',
    fullContent: 'Under the cover of war, the Nazi regime implemented the "Final Solution"—the systematic, state-sponsored persecution and genocide of European Jews. Six million Jews, along with millions of Roma, LGBTQ+ individuals, people with disabilities, and political dissidents, were murdered in ghettos and extermination camps like Auschwitz. It remains the most horrific crime against humanity in recorded history.',
    period: 'WWII',
    location: 'Auschwitz-Birkenau, Poland',
    coordinates: [50.0274, 19.2020]
  },
  {
    id: 'd-day-normandy',
    year: '1944',
    title: 'Operation Overlord (D-Day)',
    shortDescription: 'The liberation of Western Europe begins.',
    fullContent: 'The largest seborne invasion in history saw Allied forces land on the beaches of Normandy, France. Despite heavy casualties, the Allies established a permanent foothold in Europe. This opened the long-awaited Western Front, forcing Germany to fight a three-front war (East, West, and South) that it could no longer sustain.',
    period: 'WWII',
    location: 'Normandy, France',
    coordinates: [49.4144, -0.8322]
  },
  {
    id: 'atomic-bomb',
    year: '1945',
    title: 'The Atomic Bombings',
    shortDescription: 'The end of the war and the start of the nuclear age.',
    fullContent: 'To force a Japanese surrender without a costly invasion of the home islands, the US dropped atomic bombs on Hiroshima and Nagasaki. Over 200,000 people died, mostly civilians. Japan surrendered shortly after, ending the war but ushering in a new and terrifying era of nuclear weapons and superpower tension.',
    period: 'WWII',
    location: 'Hiroshima, Japan',
    coordinates: [34.3853, 132.4546]
  },

  // --- POST_WWII ---
  {
    id: 'nuremberg-trials',
    year: '1945-1946',
    title: 'The Nuremberg Trials',
    shortDescription: 'Justice for crimes against humanity.',
    fullContent: 'High-ranking Nazi officials were tried for war crimes and crimes against humanity. The trials established the fundamental principle of individual legal responsibility under international law—proving that "just following orders" is not a defense for participating in atrocities. It laid the groundwork for the modern International Criminal Court.',
    period: 'POST_WWII',
    location: 'Nuremberg, Germany',
    coordinates: [49.4472, 11.0714]
  },
  {
    id: 'marshall-plan-exec',
    year: '1948',
    title: 'Launch of the Marshall Plan',
    shortDescription: 'Rebuilding Europe to prevent Communism.',
    fullContent: 'The United States provided billions in economic aid to rebuild Western Europe. The plan was highly successful in restoring stability and preventing the spread of Soviet influence in war-torn democratic nations. It also laid the foundations for the economic integration that would eventually lead to the European Union.',
    period: 'POST_WWII',
    location: 'Paris, France',
    coordinates: [48.8566, 2.3522]
  },
  {
    id: 'berlin-airlift',
    year: '1948-1949',
    title: 'The Berlin Airlift',
    shortDescription: 'The first major confrontation of the Cold War.',
    fullContent: 'The Soviet Union blockaded West Berlin to force the Western Allies out. The Allies responded by flying in food, medicine, and fuel for over a year. This peaceful but firm resistance demonstrated their commitment to defending democratic enclaves and forced Stalin to lift the blockade, solidifying the division of Germany.',
    period: 'POST_WWII',
    location: 'Tempelhof, Berlin',
    coordinates: [52.4811, 13.3869]
  },
  {
    id: 'nato-warsaw-pact',
    year: '1949-1955',
    title: 'The Cold War Divide',
    shortDescription: 'The formation of military blocks.',
    fullContent: 'The US and its allies formed NATO (North Atlantic Treaty Organization) for collective defense. In response, the Soviet Union formed the Warsaw Pact. This formalization of the Cold War divide turned Europe into a heavily armed border between two nuclear-armed superpowers, a state of affairs that would last until the fall of the Berlin Wall in 1989.',
    period: 'POST_WWII',
    location: 'Brussels, Belgium',
    coordinates: [50.8503, 4.3517]
  }
];
