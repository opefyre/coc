
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
  // --- PRE_WWI ---
  {
    id: 'franco-prussian',
    year: '1870-1871',
    title: 'The Franco-Prussian War',
    shortDescription: 'The unification of Germany and the shift in European power.',
    fullContent: 'The Franco-Prussian War was the decisive conflict that fundamentally reshaped Europe. Provoked by the Ems Dispatch, Prussia led a coalition of German states against the Second French Empire. The swift Prussian victory at the Battle of Sedan led to the collapse of Napoleon III\'s regime and the subsequent siege of Paris. \n\nThe war\'s conclusion saw the proclamation of the German Empire in the Hall of Mirrors at Versailles, marking the unification of Germany as a dominant continental power. France was forced to cede the industrial territory of Alsace-Lorraine and pay a massive indemnity. This humiliation fueled "revanchism" in France, a driving force in French foreign policy for the next forty years. The conflict ended the era of French hegemony and established a volatile balance of power that necessitated the complex web of alliances that eventually triggered WWI.',
    period: 'PRE_WWI',
    location: 'Sedan, France',
    coordinates: [49.7027, 4.9407],
    sources: [
      'Howard, M. (1961). The Franco-Prussian War.',
      'Wetzel, D. (2001). A Duel of Nations.',
      'Wawro, G. (2003). The Franco-Prussian War: The German Conquest of France.'
    ]
  },
  {
    id: 'scramble-africa',
    year: '1884-1885',
    title: 'The Berlin Conference',
    shortDescription: 'Imperialist competition and the Scramble for Africa.',
    fullContent: 'Convened by Otto von Bismarck, the Berlin Conference was a pivotal moment in the "New Imperialism." Fourteen nations met to establish rules for the "effective occupation" of African territory, aiming to avoid direct military conflict between European powers. While presented as a humanitarian effort to end the slave trade, it was primarily a diplomatic framework for the systematic exploitation of the continent. \n\nThe conference ignored existing African political, cultural, and linguistic boundaries, leading to artificial borders that remain a source of regional conflict today. By the early 20th century, nearly 90% of Africa was under European control. This aggressive expansionism intensified rivalries between Britain, France, and Germany, as colonial disputes became proxies for European power struggles. The tension over resources and prestige in Africa directly contributed to the pre-war atmosphere of suspicion and competition.',
    period: 'PRE_WWI',
    location: 'Berlin, Germany',
    coordinates: [52.5200, 13.4050],
    sources: [
      'Pakenham, T. (1991). The Scramble for Africa.',
      'Wesseling, H. L. (1996). Divide and Rule.',
      'Hochschild, A. (1998). King Leopold\'s Ghost.'
    ]
  },
  {
    id: 'triple-alliance',
    year: '1882',
    title: 'The Triple Alliance',
    shortDescription: 'The formation of the first major alliance block.',
    fullContent: 'In 1882, Germany, Austria-Hungary, and Italy formalized the Triple Alliance. This secret pact was a cornerstone of Bismarck’s defensive diplomacy, intended to isolate France and prevent a two-front war against Germany. The treaty promised mutual military support if any member was attacked by France or Russia. \n\nHowever, this move prompted a counter-reaction. Russia and France, despite their ideological differences, signed the Dual Alliance in 1894. Later, Britain joined this orbit through the Entente Cordiale (1904) and the Anglo-Russian Entente (1907), forming the Triple Entente. By 1907, Europe was effectively divided into two rigid, armed camps. This "Bipolarity" meant that any localized conflict involving one power could mechanically drag the entire continent into a general war, a phenomenon that would be tragically realized in July 1914.',
    period: 'PRE_WWI',
    location: 'Vienna, Austria',
    coordinates: [48.2082, 16.3738],
    sources: [
      'Clark, C. (2012). The Sleepwalkers: How Europe Went to War in 1914.',
      'McMeekin, S. (2011). The Russian Origins of the First World War.',
      'Taylor, A. J. P. (1954). The Struggle for Mastery in Europe.'
    ]
  },
  {
    id: 'dreadnought',
    year: '1906',
    title: 'Launch of HMS Dreadnought',
    shortDescription: 'The start of the naval arms race.',
    fullContent: 'The launch of HMS Dreadnought by the British Royal Navy revolutionized maritime warfare. Featuring an "all-big-gun" armament and revolutionary steam turbine propulsion, she was faster and more heavily armed than any ship in existence, effectively making all other battleships obsolete overnight. \n\nThis triggered a frantic naval arms race with Germany. Kaiser Wilhelm II and Admiral von Tirpitz viewed a powerful fleet as essential to "Weltpolitik" (World Policy) and challenged British maritime supremacy. For Britain, the navy was the vital artery of its global empire. The resulting competition drained national treasuries and poisoned diplomatic relations. The naval race became a focal point of public anxiety and nationalism, convincing many in Britain that Germany was the primary threat to their national survival, well before the territorial disputes of 1914.',
    period: 'PRE_WWI',
    location: 'Portsmouth, UK',
    coordinates: [50.8167, -1.0833],
    sources: [
      'Massie, R. K. (1991). Dreadnought: Britain, Germany, and the Coming of the Great War.',
      'Lambert, N. A. (1999). Sir John Fisher\'s Naval Revolution.',
      'Padfield, P. (1974). The Great Naval Race.'
    ]
  },
  {
    id: 'balkan-crises',
    year: '1908-1913',
    title: 'The Balkan Crises',
    shortDescription: 'The "Powder Keg of Europe" begins to smoke.',
    fullContent: 'The decline of the Ottoman Empire created a power vacuum in the Balkans, which became the most volatile region in Europe. The 1908 Bosnian Crisis, where Austria-Hungary annexed Bosnia-Herzegovina, infuriated Serbia and its protector, Russia. This was followed by the Balkan Wars of 1912-1913, which saw the Balkan League (Serbia, Greece, Montenegro, and Bulgaria) drive the Ottomans out of most of Europe. \n\nSerbia emerged from these conflicts nearly doubled in size and fueled by aggressive Pan-Slavic nationalism. Austria-Hungary viewed a strong Serbia as an existential threat to its own multi-ethnic empire. Russia, having suffered humiliation in 1908, felt it could not back down again without losing its Great Power status. By 1914, the diplomatic atmosphere was highly combustible, with major powers prepared to risk war over regional Balkan interests to maintain their prestige and strategic positions.',
    period: 'PRE_WWI',
    location: 'The Balkans',
    coordinates: [42.0000, 21.0000],
    sources: [
      'Glenny, M. (1999). The Balkans: Nationalism, War, and the Great Powers.',
      'Fromkin, D. (2004). Europe\'s Last Summer.',
      'Bridge, F. R. (1990). The Great Powers and the European States System.'
    ]
  },

  // --- WWI ---
  {
    id: 'sarajevo',
    year: 'June 28, 1914',
    title: 'The Assassination in Sarajevo',
    shortDescription: 'The spark that ignited the Great War.',
    fullContent: 'On a state visit to Sarajevo, Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, was assassinated by Gavrilo Princip, a 19-year-old Serbian nationalist and member of the "Black Hand." The assassination was intended to strike a blow for South Slav liberation from Austrian rule. \n\nThis event triggered the "July Crisis." Austria-Hungary, supported by Germany’s "blank check," issued a harsh ultimatum to Serbia. When Serbia did not fully comply, Austria declared war. The subsequent mobilization of Russia in support of Serbia forced Germany to activate the Schlieffen Plan, leading to the invasion of neutral Belgium and Britain\'s entry into the war. Within weeks, the rigid alliance systems of the previous decades had turned a regional assassination into a global catastrophe. It remains the archetypal example of how miscalculation and diplomatic failure can lead to unintended total war.',
    period: 'WWI',
    location: 'Sarajevo, Bosnia',
    coordinates: [43.8563, 18.4131],
    sources: [
      'Clark, C. (2012). The Sleepwalkers.',
      'Dedijer, V. (1966). The Road to Sarajevo.',
      'McMeekin, S. (2013). July 1914: Countdown to War.'
    ]
  },
  {
    id: 'marne',
    year: 'September 1914',
    title: 'The Battle of the Marne',
    shortDescription: 'The end of movement and the start of the stalemate.',
    fullContent: 'The Battle of the Marne was one of the most significant strategic victories in military history. The German advance through Belgium and northern France had brought them within sight of Paris. However, a counter-offensive by French and British forces exploited a gap in the German lines. The "Miracle of the Marne" forced the German army into a general retreat to the Aisne River. \n\nThis defeat signaled the failure of the Schlieffen Plan, which relied on a swift victory over France to avoid a two-front war. The ensuing "Race to the Sea" saw both sides attempt to outflank each other, eventually resulting in a continuous line of trenches stretching from the Swiss border to the North Sea. The war of movement was over; the era of static, industrial trench warfare had begun, a stalemate that would define the Western Front for the next four years.',
    period: 'WWI',
    location: 'The Marne, France',
    coordinates: [48.9167, 4.3667],
    sources: [
      'Tuchman, B. (1962). The Guns of August.',
      'Strachan, H. (2001). The First World War: Volume I: To Arms.',
      'Herwig, H. H. (2009). The Marne, 1914.'
    ]
  },
  {
    id: 'verdun-somme',
    year: '1916',
    title: 'The Battles of Verdun and the Somme',
    shortDescription: 'The grueling height of industrial attrition.',
    fullContent: '1916 was defined by two massive battles of attrition on the Western Front. At Verdun, German Chief of Staff Erich von Falkenhayn aimed to "bleed France white" by attacking a site of immense symbolic importance. The ten-month battle became a symbol of French resistance ("Ils ne passeront pas") but resulted in over 700,000 casualties for both sides combined. \n\nTo relieve pressure on Verdun, the British launched the Battle of the Somme. On the first day alone, the British Army suffered 57,000 casualties—the bloodiest day in its history. The battle introduced the tank but ended with both sides exhausted and only a few miles of ground gained. These battles demonstrated the horrific reality of modern industrial warfare, where massed artillery and machine guns made traditional offensive tactics suicidal. They left an indelible mark on the collective memory of Europe, symbolizing the senselessness of the conflict.',
    period: 'WWI',
    location: 'Verdun, France',
    coordinates: [49.1667, 5.3833],
    sources: [
      'Horne, A. (1962). The Price of Glory: Verdun 1916.',
      'Prior, R., & Wilson, T. (2005). The Somme.',
      'Keegan, J. (1976). The Face of Battle.'
    ]
  },
  {
    id: 'russian-rev-wwi',
    year: '1917',
    title: 'The Russian Revolution and Withdrawal',
    shortDescription: 'The collapse of the Eastern Front.',
    fullContent: 'By 1917, the Russian Empire was on the brink of collapse due to catastrophic military losses and internal economic ruin. The February Revolution overthrew the Tsar, but the Provisional Government\'s decision to continue the war led to further instability. In October, the Bolsheviks, led by Lenin, seized power and immediately sought peace. \n\nIn early 1918, Russia signed the Treaty of Brest-Litovsk, ceding vast territories to the Central Powers. This was a massive strategic shift; Germany was finally able to move its Eastern armies to the West for a final, decisive offensive before American manpower could arrive in force. However, the revolution also introduced a new ideological force—communism—into international politics, creating a "Red Scare" in the West and setting the stage for the ideological conflicts of the rest of the century.',
    period: 'WWI',
    location: 'Petrograd, Russia',
    coordinates: [59.9343, 30.3351],
    sources: [
      'Figes, O. (1996). A People\'s Tragedy.',
      'Service, R. (2000). Lenin: A Biography.',
      'Pipes, R. (1990). The Russian Revolution.'
    ]
  },
  {
    id: 'hundred-days-off',
    year: 'August-November 1918',
    title: 'The Hundred Days Offensive',
    shortDescription: 'The final collapse of the Central Powers.',
    fullContent: 'Following the failure of the German Spring Offensive, the Allies launched a massive counter-attack known as the Hundred Days Offensive. Using new tactics that integrated infantry, tanks, aircraft, and massed artillery, the Allies broke the Hindenburg Line and forced the German army into a chaotic retreat. \n\nSimultaneously, Germany’s allies were collapsing: Bulgaria, the Ottoman Empire, and finally Austria-Hungary signed separate armistices. Inside Germany, the "Kiel Mutiny" and widespread strikes led to the abdication of the Kaiser and the proclamation of a republic. On November 11, 1918, Germany signed an armistice with the Allies. The war was over, but the suddenness of the collapse led to the "Dolchstoßlegende" (Stab-in-the-back myth)—the false belief that the German army had not been defeated on the battlefield but betrayed at home, a narrative Hitler would later exploit.',
    period: 'WWI',
    location: 'Amiens, France',
    coordinates: [49.8942, 2.2957],
    sources: [
      'Lloyd, N. (2013). Hundred Days: The End of the Great War.',
      'Travers, T. (1987). The Killing Ground.',
      'Sheffield, G. (2001). Forgotten Victory.'
    ]
  },

  // --- INTERWAR ---
  {
    id: 'versailles-interwar',
    year: '1919',
    title: 'The Treaty of Versailles',
    shortDescription: 'The flawed foundation of the new world order.',
    fullContent: 'The Treaty of Versailles was the primary peace treaty that ended WWI. Negotiated by the "Big Three" (Wilson, Lloyd George, and Clemenceau), it aimed to reconstruct Europe and prevent future wars. It established the League of Nations, an ambitious but ultimately weak organization for international cooperation. \n\nHowever, the treaty was widely criticized as too harsh to be enduring and too lenient to be effective. Germany was forced to accept "War Guilt," pay astronomical reparations, and suffer significant territorial losses. This created deep-seated resentment and economic instability in the nascent Weimar Republic. In the United States, the Senate rejected the treaty and the League of Nations, signaling a return to isolationism. The treaty failed to address the underlying causes of conflict and left many European borders contested, providing fertile ground for the rise of nationalist and revisionist powers in the 1930s.',
    period: 'INTERWAR',
    location: 'Versailles, France',
    coordinates: [48.8049, 2.1204],
    sources: [
      'MacMillan, M. (2001). Paris 1919.',
      'Keynes, J. M. (1919). The Economic Consequences of the Peace.',
      'Sharp, A. (1991). The Versailles Settlement.'
    ]
  },
  {
    id: 'march-on-rome',
    year: '1922',
    title: 'The March on Rome',
    shortDescription: 'The birth of Fascism as a state power.',
    fullContent: 'In October 1922, Benito Mussolini and his "Blackshirts" organized a mass demonstration to seize power in Italy. Fearing civil war, King Victor Emmanuel III invited Mussolini to form a government. This event marked the birth of the first Fascist state, a radical alternative to both liberal democracy and Soviet communism. \n\nFascism emphasized extreme nationalism, militarism, and the absolute authority of the leader (Il Duce). Mussolini’s success inspired similar movements across Europe, most notably Adolf Hitler’s Nazi Party in Germany. Italy’s transformation into a totalitarian state signaled the beginning of the "crisis of democracy" in the interwar period. Mussolini’s aggressive foreign policy, aimed at recreating the Roman Empire, would later destabilize the League of Nations and lead Italy into a fatal alliance with Nazi Germany.',
    period: 'INTERWAR',
    location: 'Rome, Italy',
    coordinates: [41.9028, 12.4964],
    sources: [
      'Bosworth, R. J. B. (2002). Mussolini.',
      'Morgan, P. (2003). Fascism in Europe, 1919-1945.',
      'Lyttelton, A. (1973). The Seizure of Power: Fascism in Italy, 1919-1929.'
    ]
  },
  {
    id: 'munich-agreement',
    year: '1938',
    title: 'The Munich Agreement',
    shortDescription: 'The peak and failure of Appeasement.',
    fullContent: 'The Munich Agreement was a settlement reached by Germany, Britain, France, and Italy that permitted German annexation of the Sudetenland in western Czechoslovakia. British Prime Minister Neville Chamberlain returned to London proclaiming "Peace for our time," believing that satisfying Hitler’s territorial demands would prevent another world war. \n\nHowever, Czechoslovakia—a sovereign democracy—was not even invited to the conference. The agreement is now the primary historical symbol of the failure of "Appeasement." Instead of satiating Hitler, it convinced him of the weakness of the Western democracies and emboldened him to seize the rest of Czechoslovakia just months later. The betrayal of Czechoslovakia also convinced Stalin that Britain and France were unreliable allies, leading him to seek a secret deal with Hitler in 1939. Munich was the final major diplomatic effort to avoid war; its failure made a general conflict inevitable.',
    period: 'INTERWAR',
    location: 'Munich, Germany',
    coordinates: [48.1351, 11.5820],
    sources: [
      'Overy, R. J. (1989). The Road to War.',
      'Taylor, A. J. P. (1961). The Origins of the Second World War.',
      'McDonough, F. (1998). Neville Chamberlain, Appeasement and the British Road to War.'
    ]
  },

  // --- WWII ---
  {
    id: 'blitzkrieg-poland',
    year: 'September 1939',
    title: 'The Invasion of Poland',
    shortDescription: 'The start of WWII and the new era of movement.',
    fullContent: 'On September 1, 1939, Germany invaded Poland, utilizing "Blitzkrieg" (Lightning War)—a revolutionary doctrine that integrated massed tanks, motorized infantry, and air power to bypass and envelop enemy forces. Two weeks later, following the secret protocols of the Molotov-Ribbentrop Pact, the Soviet Union invaded from the East. \n\nBritain and France, honoring their guarantees to Poland, declared war on Germany on September 3. This event ended the "Phoney War" and marked the beginning of World War II. The rapid collapse of Poland shocked the world and demonstrated that the static trench warfare of the past was over. The coordination of the Luftwaffe (air force) with Panzers (tanks) established a military template that would allow Germany to dominate the continent for the next three years. For the Polish people, it marked the beginning of a brutal six-year occupation characterized by unprecedented atrocities.',
    period: 'WWII',
    location: 'Westerplatte, Poland',
    coordinates: [54.4075, 18.6672],
    sources: [
      'Moorhouse, R. (2019). First to Fight: The Polish War 1939.',
      'Keegan, J. (1989). The Second World War.',
      'Frieser, K. H. (2005). The Blitzkrieg Legend.'
    ]
  },
  {
    id: 'fall-of-france',
    year: 'May-June 1940',
    title: 'The Fall of France and Dunkirk',
    shortDescription: 'The collapse of the Western Allies.',
    fullContent: 'In May 1940, Germany bypassed the "impenetrable" Maginot Line by attacking through the Ardennes Forest. The Allied armies were split, and the British Expeditionary Force (BEF) was pinned against the sea. Operation Dynamo—the evacuation from Dunkirk—successfully rescued over 330,000 troops using a fleet of naval and civilian vessels, a "miracle" that preserved the core of the British army. \n\nHowever, France was defeated in just six weeks. The fall of the world’s most prestigious land power left Britain to face Nazi Germany alone. The subsequent armistice divided France into an occupied zone and the collaborationist Vichy regime. This victory gave Hitler control over Western Europe and access to the Atlantic ports, fundamentally changing the strategic landscape of the war and forcing Britain into a desperate struggle for survival in the air and at sea.',
    period: 'WWII',
    location: 'Dunkirk, France',
    coordinates: [51.0333, 2.3667],
    sources: [
      'Levine, J. (2017). Forgotten Voices of Dunkirk.',
      'Jackson, J. (2003). The Fall of France.',
      'May, E. R. (2000). Strange Victory.'
    ]
  },
  {
    id: 'barbarossa-wwii',
    year: 'June 1941',
    title: 'Operation Barbarossa',
    shortDescription: 'The invasion of the Soviet Union.',
    fullContent: 'Violating the non-aggression pact, Hitler launched Operation Barbarossa, the largest land invasion in history. Over three million German and Axis troops attacked the Soviet Union on a 2,000-mile front. Hitler viewed the conflict as a "War of Annihilation" to secure "Lebensraum" (living space) and destroy the "Judeo-Bolshevik" threat. \n\nInitially, the Soviet Red Army suffered catastrophic losses, with entire armies encircled and destroyed. However, the sheer size of the USSR, the scorched-earth policy, and the eventual onset of the brutal Russian winter halted the German advance at the gates of Moscow. Barbarossa opened the Eastern Front, a theater characterized by unprecedented scale and brutality, which would consume 80% of German military resources. It was here that the war would eventually be won and lost, turning a European conflict into a titanic struggle between two totalitarian superpowers.',
    period: 'WWII',
    location: 'Brest-Litovsk, Belarus',
    coordinates: [52.1333, 23.6667],
    sources: [
      'Glantz, D. M. (2001). Barbarossa: Hitler\'s Invasion of Russia 1941.',
      'Beevor, A. (2012). The Second World War.',
      'Erickson, J. (1975). The Road to Stalingrad.'
    ]
  },
  {
    id: 'midway-battle',
    year: 'June 1942',
    title: 'The Battle of Midway',
    shortDescription: 'The turning point of the Pacific War.',
    fullContent: 'The Battle of Midway was the most important naval engagement of the Pacific Theater. Using code-breaking intelligence, the U.S. Navy intercepted a massive Japanese strike force intended to seize the Midway atoll. In a decisive clash of aircraft carriers, the U.S. sank four Japanese carriers, effectively neutralizing the Imperial Japanese Navy’s offensive capability. \n\nMidway halted Japanese expansion and restored the balance of naval power in the Pacific. It proved that the aircraft carrier had replaced the battleship as the primary weapon of maritime war. Following Midway, the U.S. began its "Island Hopping" campaign, systematically seizing strategic bases to move closer to the Japanese home islands. For Japan, it was a blow from which their industrial base could never fully recover, marking the shift from strategic dominance to a desperate defensive struggle.',
    period: 'WWII',
    location: 'Midway Atoll',
    coordinates: [28.2101, -177.3761],
    sources: [
      'Prange, G. W. (1982). Miracle at Midway.',
      'Parshall, J., & Tully, A. (2005). Shattered Sword.',
      'Symonds, C. L. (2011). The Battle of Midway.'
    ]
  },
  {
    id: 'stalingrad-wwii',
    year: '1942-1943',
    title: 'The Battle of Stalingrad',
    shortDescription: 'The turning point of the Eastern Front.',
    fullContent: 'The Battle of Stalingrad was the bloodiest engagement in human history, claiming nearly two million lives. For five months, Soviet and German forces fought a brutal house-to-house "Rattenkrieg" (war of the rats) in the ruins of the city. In November 1942, a massive Soviet pincer movement (Operation Uranus) surrounded the German 6th Army. \n\nDefying Hitler\'s orders to fight to the last man, Field Marshal Friedrich Paulus surrendered in February 1943. The defeat was a catastrophic psychological and military blow to Nazi Germany. It shattered the myth of German invincibility and marked the end of their eastward advance. From Stalingrad onwards, the Soviet Red Army began a relentless westward push that would eventually reach the heart of Berlin. It remains the ultimate symbol of Soviet sacrifice and resilience in the face of annihilation.',
    period: 'WWII',
    location: 'Volgograd, Russia',
    coordinates: [48.7080, 44.5133],
    sources: [
      'Beevor, A. (1998). Stalingrad.',
      'Glantz, D. M. (2009). To the Gates of Stalingrad.',
      'Grossman, V. (2005). A Writer at War.'
    ]
  },
  {
    id: 'kursk-battle',
    year: 'July 1943',
    title: 'The Battle of Kursk',
    shortDescription: 'The largest tank battle in history.',
    fullContent: 'Operation Citadel was Germany’s last major offensive on the Eastern Front, aimed at cutting off a Soviet salient at Kursk. Forewarned by intelligence, the Soviets constructed a massive, deep defense system of minefields and anti-tank ditches. The resulting clash involved nearly 6,000 tanks and 2 million troops. \n\nThe battle saw the failure of the elite German Panzer divisions to break through. When Hitler was forced to cancel the offensive to deal with the Allied invasion of Sicily, the strategic initiative on the Eastern Front passed permanently to the Soviet Union. Kursk proved that the Red Army had mastered the art of modern, large-scale mechanized warfare. It was the "death ride" of the German armored forces and ensured that Germany could no longer win the war on the ground in the East.',
    period: 'WWII',
    location: 'Kursk, Russia',
    coordinates: [51.7373, 36.1874],
    sources: [
      'Glantz, D. M., & House, J. M. (1999). The Battle of Kursk.',
      'Zetterling, N., & Frankson, A. (2000). Kursk 1943.',
      'Clark, L. (2011). Kursk: The Greatest Battle.'
    ]
  },
  {
    id: 'fall-of-berlin',
    year: 'April-May 1945',
    title: 'The Fall of Berlin and V-E Day',
    shortDescription: 'The final collapse of the Third Reich.',
    fullContent: 'In April 1945, two and a half million Soviet troops launched the final assault on Berlin. The city was defended by a desperate mix of regular army, Hitler Youth, and elderly Volksturm. As the Red Army reached the city center, Adolf Hitler committed suicide in his bunker on April 30. \n\nOn May 2, the Berlin garrison surrendered. A week later, on May 8, Germany signed an unconditional surrender to both the Western Allies and the Soviet Union, marking Victory in Europe (V-E) Day. The fall of Berlin ended the Nazi regime and the war in Europe, but it also saw the city divided into occupation zones, a microcosm of the looming Cold War. The scale of destruction in Berlin symbolized the total ruin of Hitler’s "Thousand-Year Reich" and the catastrophic cost of his pursuit of world domination.',
    period: 'WWII',
    location: 'Berlin, Germany',
    coordinates: [52.5186, 13.3761],
    sources: [
      'Beevor, A. (2002). Berlin: The Downfall 1945.',
      'Ryan, C. (1966). The Last Battle.',
      'Fest, J. (2004). Inside Hitler\'s Bunker.'
    ]
  },
  {
    id: 'japanese-surrender',
    year: 'August-September 1945',
    title: 'The Atomic Bombs and V-J Day',
    shortDescription: 'The end of WWII and the nuclear dawn.',
    fullContent: 'Following the atomic bombings of Hiroshima and Nagasaki and the Soviet declaration of war, Japan faced "prompt and utter destruction." On August 15, Emperor Hirohito broadcast a recording announcing Japan’s acceptance of the terms of the Potsdam Declaration—the first time the Japanese people had heard their sovereign\'s voice. \n\nThe formal surrender was signed on September 2, 1945, aboard the USS Missouri in Tokyo Bay, marking Victory over Japan (V-J) Day. This officially ended World War II, the deadliest conflict in human history. The use of nuclear weapons not only forced the surrender but fundamentally altered the nature of global power and security. It brought a definitive end to the era of total conventional war between great powers and inaugurated the nuclear age, where the threat of mutual destruction would dominate the geopolitical landscape for decades to come.',
    period: 'WWII',
    location: 'Tokyo Bay, Japan',
    coordinates: [35.4800, 139.7700],
    sources: [
      'Rhodes, R. (1986). The Making of the Atomic Bomb.',
      'Frank, R. B. (1999). Downfall: The End of the Imperial Japanese Empire.',
      'Hasegawa, T. (2005). Racing the Enemy.'
    ]
  },

  // --- POST_WWII ---
  {
    id: 'nuremberg-trials',
    year: '1945-1946',
    title: 'The Nuremberg Trials',
    shortDescription: 'Justice for crimes against humanity.',
    fullContent: 'The Nuremberg Trials were a series of military tribunals held by the Allied forces to prosecute the prominent members of the political, military, judicial, and economic leadership of Nazi Germany. It was the first time in history that individuals were held legally responsible for state-sponsored atrocities. \n\nThe trials established the concepts of "Crimes Against Peace," "War Crimes," and "Crimes Against Humanity." They proved that "superior orders" was not a valid defense for participating in genocide. The evidence presented—much of it from the Nazis\' own meticulously kept records—documented the full horror of the Holocaust for the world to see. Nuremberg laid the fundamental groundwork for modern international law and the establishment of the International Criminal Court, enshrining the principle that even in war, there are universal legal and moral boundaries that cannot be crossed.',
    period: 'POST_WWII',
    location: 'Nuremberg, Germany',
    coordinates: [49.4472, 11.0714],
    sources: [
      'Taylor, T. (1992). The Anatomy of the Nuremberg Trials.',
      'Sands, P. (2016). East West Street.',
      'Douglas, L. (2001). The Memory of Judgment.'
    ]
  },
  {
    id: 'marshall-plan-exec',
    year: '1948',
    title: 'Launch of the Marshall Plan',
    shortDescription: 'Rebuilding Europe to prevent Communism.',
    fullContent: 'Officially known as the European Recovery Program (ERP), the Marshall Plan provided over $13 billion in economic aid to rebuild Western Europe after WWII. The United States feared that the poverty and social unrest of war-torn nations would provide fertile ground for the spread of Soviet-backed communism. \n\nThe plan was exceptionally successful, fueling the "economic miracles" of West Germany, France, and Italy. It restored industrial production, stabilized currencies, and encouraged international trade. Crucially, it required European nations to cooperate economically, laying the foundations for the eventual formation of the European Union. By integrating West Germany into the Western economic orbit, it also solidified the division of Europe and became a key pillar of the U.S. "Containment" strategy during the early Cold War.',
    period: 'POST_WWII',
    location: 'Paris, France',
    coordinates: [48.8566, 2.3522],
    sources: [
      'Steil, B. (2018). The Marshall Plan: Dawn of the Cold War.',
      'Hogan, M. J. (1987). The Marshall Plan.',
      'Behrman, G. (2007). The Most Noble Adventure.'
    ]
  },
  {
    id: 'berlin-airlift',
    year: '1948-1949',
    title: 'The Berlin Airlift',
    shortDescription: 'The first major confrontation of the Cold War.',
    fullContent: 'In June 1948, the Soviet Union blocked all road, rail, and water access to West Berlin in an attempt to force the Western Allies out of the city. The Allies responded with Operation Vittles—a massive, year-long airlift that supplied over two million Berliners with food, fuel, and medicine. At the height of the airlift, a plane landed in Berlin every 45 seconds. \n\nThe airlift was a profound logistical triumph and a major propaganda victory for the West. It demonstrated the Allies\' commitment to defending democratic enclaves and transformed the former German enemy into a vital partner. Humiliated, Stalin lifted the blockade in May 1949. The crisis accelerated the formal creation of the Federal Republic of Germany (West Germany) and the formation of NATO, permanently cementing the "Iron Curtain" across the center of Europe.',
    period: 'POST_WWII',
    location: 'Tempelhof, Berlin',
    coordinates: [52.4811, 13.3869],
    sources: [
      'Miller, R. G. (1998). To Save a City: The Berlin Airlift 1948-1949.',
      'Tusa, A., & Tusa, J. (1988). The Berlin Blockade.',
      'Giangreco, D. M., & Griffin, R. E. (1988). Airbridge to Berlin.'
    ]
  },
  {
    id: 'nato-warsaw-pact',
    year: '1949-1955',
    title: 'The Cold War Divide',
    shortDescription: 'The formation of military blocks.',
    fullContent: 'In 1949, the North Atlantic Treaty Organization (NATO) was formed as a collective defense pact between the U.S., Canada, and Western European nations. Its core principle, Article 5, stated that an attack on one member was an attack on all. In response to the admission of West Germany into NATO in 1955, the Soviet Union formed the Warsaw Pact with its Eastern European satellite states. \n\nThis formalization of military blocks divided the world into "East" and "West." For the next four decades, Europe would be the primary front line of the Cold War, characterized by massive military buildups, nuclear brinkmanship, and "proxy wars" around the globe. This bipolar world order, born directly from the ashes of WWII, would define global politics until the collapse of the Soviet Union in 1991. The "Long Peace" between the superpowers was maintained not by diplomacy alone, but by the terrifying logic of Mutually Assured Destruction (MAD).',
    period: 'POST_WWII',
    location: 'Brussels, Belgium',
    coordinates: [50.8503, 4.3517],
    sources: [
      'Gaddis, J. L. (2005). The Cold War: A New History.',
      'NATO Archives',
      'Mastny, V., & Byrne, M. (2005). A Cardboard Castle?: An Inside History of the Warsaw Pact.'
    ]
  }
];
