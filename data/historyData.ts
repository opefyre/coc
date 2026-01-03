
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
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'The Franco-Prussian War was the decisive conflict that fundamentally reshaped the European continent. Triggered by the Ems Dispatch—a carefully edited telegram designed by Prussian Chancellor Otto von Bismarck to provoke French outrage—the conflict saw a coalition of German states led by Prussia crush the Second French Empire. The war was characterized by the superior Prussian use of modern technology, including a vast railway network for mobilization and the telegraph for command and control. At the Battle of Sedan, the French army suffered a catastrophic defeat, resulting in the capture of Emperor Napoleon III. This led to the collapse of the monarchy and the declaration of the Third French Republic, which continued a desperate but futile resistance during the grueling Siege of Paris.',
    historicalContext: 'The aftermath of the war saw the proclamation of the German Empire in the Hall of Mirrors at Versailles, a moment of profound humiliation for France. The annexation of Alsace-Lorraine became a "permanent wound" in the French national psyche, fueling decades of "revanchism." Geopolitically, the war ended centuries of French hegemony in Central Europe and established Germany as the continent\'s preeminent industrial and military power. This radical shift in the balance of power destroyed the old "Concert of Europe" and forced nations into the rigid, defensive alliance blocks that would eventually collide in 1914.',
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
    image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Convened by Otto von Bismarck to manage the rising tensions among European powers, the Berlin Conference was a watershed moment in global imperialism. Fourteen nations met to establish ground rules for the "effective occupation" of African territory, aiming to prevent direct military conflicts between rivals like Britain, France, and Germany. The conference map-making was performed with almost no regard for existing ethnic, linguistic, or political boundaries on the ground. It formalized the "Scramble for Africa," accelerating the transition from informal influence to direct colonial rule over nearly the entire continent.',
    historicalContext: 'While the conference may have prevented an immediate war between European powers in the late 19th century, it institutionalized a hyper-competitive imperialist mindset that directly contributed to WWI. The race for resources and strategic ports intensified nationalistic rivalries and created numerous "flashpoints" where European armies stood on the brink of conflict. Events like the Fashoda Incident and the Moroccan Crises were direct outgrowths of the tensions managed—but not resolved—at Berlin. Furthermore, it trained a generation of military officers in aggressive expansionist tactics and established the industrial-extractive model that would power the war machines of the Great Powers.',
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
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In 1882, Germany, Austria-Hungary, and Italy formalized the Triple Alliance, a secret pact that became a cornerstone of Bismarck’s intricate diplomatic system. The treaty was ostensibly defensive: Germany and Austria-Hungary pledged to assist Italy if she were attacked by France, and Italy pledged to support Germany if it were attacked by France. It was a masterpiece of realpolitik designed to isolate France and ensure that any future conflict would not result in a two-front war for the newly unified Germany. However, the secret nature of the pact and the conflicting interests of its members—particularly between Italy and Austria over Balkan territories—made it a brittle foundation for peace.',
    historicalContext: 'The Triple Alliance fundamentally altered European diplomacy by creating a rigid, "bipolar" state system. When Russia and France responded with their own Dual Alliance in 1894, the continent was effectively divided into two armed camps. This system removed the diplomatic flexibility that had characterized the 19th century. Instead of acting as independent mediators, the Great Powers became hostages to their allies\' local and regional disputes. The "blank check" Germany gave to Austria-Hungary in July 1914 was the final, mechanical consequence of a treaty system that prioritized alliance loyalty over rational crisis management.',
    period: 'PRE_WWI',
    location: 'Vienna, Austria',
    coordinates: [48.2082, 16.3738],
    sources: [
      'Clark, C. (2012). The Sleepwalkers.',
      'McMeekin, S. (2011). The Russian Origins of the First World War.',
      'Taylor, A. J. P. (1954). The Struggle for Mastery in Europe.'
    ]
  },
  {
    id: 'dreadnought',
    year: '1906',
    title: 'Launch of HMS Dreadnought',
    shortDescription: 'The start of the naval arms race.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'The launch of HMS Dreadnought by the British Royal Navy was an industrial event of such magnitude that it gave its name to an entire class of warships. Featuring an "all-big-gun" armament of ten 12-inch guns and revolutionary steam turbine propulsion, she was faster, more heavily armored, and more powerful than any ship previously built. Crucially, Dreadnought rendered all existing battleships—including the entire British fleet—obsolete overnight. This "reset" allowed Germany to compete on more even terms with the world\'s leading naval power, triggering a frantic, multi-billion-pound construction race that would strain the economies of both empires.',
    historicalContext: 'The Anglo-German naval race was the psychological engine that drove Britain toward war. For centuries, British security had rested on the "Two-Power Standard," requiring the Royal Navy to be larger than the next two combined. Germany\'s attempt to challenge this maritime hegemony convinced the British public and government that Germany was not merely a commercial rival, but an existential threat. This industrial competition militarized British society, forced the government to abandon its policy of "Splendid Isolation," and directly led to the formation of the Entente Cordiale with France—an alliance that would draw Britain into the continental war in 1914.',
    period: 'PRE_WWI',
    location: 'Portsmouth, UK',
    coordinates: [50.8167, -1.0833],
    sources: [
      'Massie, R. K. (1991). Dreadnought.',
      'Lambert, N. A. (1999). Sir John Fisher\'s Naval Revolution.',
      'Padfield, P. (1974). The Great Naval Race.'
    ]
  },
  {
    id: 'balkan-crises',
    year: '1908-1913',
    title: 'The Balkan Crises',
    shortDescription: 'The "Powder Keg of Europe" begins to smoke.',
    image: 'https://images.unsplash.com/photo-1547038577-da80abbc4f19?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'The decline of the Ottoman Empire, often called the "Sick Man of Europe," created a dangerous power vacuum in the Balkan Peninsula. The 1908 Bosnian Crisis, triggered by Austria-Hungary\'s sudden annexation of Bosnia and Herzegovina, outraged Serbian nationalists and their Russian patrons. This was followed by the Balkan Wars of 1912-1913, where regional states like Serbia, Bulgaria, and Greece joined forces to expel the Ottomans from nearly all their European holdings. However, the subsequent infighting over the spoils of victory only heightened ethnic tensions and local rivalries, leaving the region deeply unstable and heavily militarized.',
    historicalContext: 'These crises transformed the Balkans into the primary flashpoint where the strategic interests of Austria-Hungary and Russia directly collided. Serbia emerged from these wars as a confident regional power with Pan-Slavic ambitions, which Austria-Hungary viewed as a mortal threat to its multi-ethnic stability. By 1914, both Russia and Austria felt they had suffered significant diplomatic humiliations in the region and could not afford to back down again. The Balkans were no longer a peripheral concern; they had become the specific theater where a local dispute was almost guaranteed to escalate into a general European war.',
    period: 'PRE_WWI',
    location: 'The Balkans',
    coordinates: [42.0000, 21.0000],
    sources: [
      'Glenny, M. (1999). The Balkans.',
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
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'On a summer morning in Sarajevo, Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, and his wife Sophie were assassinated by Gavrilo Princip, a 19-year-old Serbian nationalist. Princip was a member of "Young Bosnia," a group supported by the "Black Hand," a secret society within the Serbian military. The assassination was a sequence of extraordinary coincidences: an earlier bomb attempt had failed, and the Archduke\'s car only came to a halt in front of Princip after taking a wrong turn during a revised route. These two pistol shots triggered the "July Crisis," a month-long diplomatic failed-state that saw the Great Powers mobilize their massive industrial armies.',
    historicalContext: 'Sarajevo represents the catastrophic failure of 19th-century "Old Diplomacy" and the dangerous intersection of ethnic nationalism and imperial pride. The event demonstrated how a single act of political terror could bypass the intricate safeguards of the international system. The legacy of these shots was the total destruction of the world order: four major empires (German, Austro-Hungarian, Ottoman, and Russian) would vanish within four years. The redrawing of the map that followed—creating modern nations like Iraq, Syria, Poland, and Czechoslovakia—set the stage for nearly every major conflict of the 20th and 21st centuries.',
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
    image: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Just weeks into the war, the German army seemed on the verge of capturing Paris and fulfilling the "Schlieffen Plan." However, a gap opened between the German First and Second Armies, which was exploited by a desperate French and British counter-attack along the Marne River. In a famous display of national emergency, 600 Parisian taxicabs were used to ferry reinforcements to the front. The "Miracle of the Marne" forced the German forces into a general retreat to the Aisne River. This signaled the definitive failure of Germany\'s hope for a swift, decisive victory and led to the "Race to the Sea," where both sides attempted to outflank each other until they reached the Belgian coast.',
    historicalContext: 'The Marne ensured that WWI would not be a "short war" that would be "over by Christmas." By forcing the conflict into a tactical stalemate, it necessitated the total mobilization of domestic economies and civilian populations—marking the birth of "Total War." The battle established the Western Front as a continuous line of trenches from the Swiss border to the North Sea, a static nightmare that would consume millions of lives. The strategic failure of the German offensive here eventually led to the long war of attrition that the Central Powers, with their limited resources, were ultimately destined to lose.',
    period: 'WWI',
    location: 'The Marne, France',
    coordinates: [48.9167, 4.3667],
    sources: [
      'Tuchman, B. (1962). The Guns of August.',
      'Strachan, H. (2001). The First World War.',
      'Herwig, H. H. (2009). The Marne, 1914.'
    ]
  },
  {
    id: 'verdun-somme',
    year: '1916',
    title: 'The Battles of Verdun and the Somme',
    shortDescription: 'The grueling height of industrial attrition.',
    image: 'https://images.unsplash.com/photo-1513293026330-0f2c4a938676?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'The year 1916 saw industrial warfare reach its horrific zenith. At Verdun, German Chief of Staff Erich von Falkenhayn launched an offensive designed to "bleed the French army white" by attacking a point of national pride. The resulting ten-month battle was a "mincing machine" of artillery and flamethrowers. To relieve the pressure on Verdun, the British launched the Battle of the Somme. On the first day alone, the British army suffered 60,000 casualties—the bloodiest day in its history. These battles introduced new horrors, including the first use of tanks and large-scale poison gas attacks, yet resulted in only a few miles of territorial gain for nearly two million casualties.',
    historicalContext: 'These battles fundamentally altered the human psyche and the social contract regarding war. Verdun became the ultimate symbol of French national resilience and sacrifice, while the Somme left a permanent scar on the British collective consciousness, destroying an entire generation of volunteers. Strategically, 1916 proved that victory would no longer be determined by tactical maneuvers or individual heroism, but by sheer industrial capacity, manpower reserves, and the ability of a society to endure unprecedented suffering. This led to the "War Economy" footing of 1917, where the home front became as critical as the battlefront.',
    period: 'WWI',
    location: 'Verdun, France',
    coordinates: [49.1667, 5.3833],
    sources: [
      'Horne, A. (1962). The Price of Glory.',
      'Prior, R., & Wilson, T. (2005). The Somme.',
      'Keegan, J. (1976). The Face of Battle.'
    ]
  },
  {
    id: 'russian-rev-wwi',
    year: '1917',
    title: 'The Russian Revolution and Withdrawal',
    shortDescription: 'The collapse of the Eastern Front.',
    image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Years of military failure, catastrophic losses, and domestic starvation led to the collapse of the Romanov dynasty in February 1917. The subsequent Provisional Government\'s decision to continue the war was deeply unpopular, allowing Vladimir Lenin and the Bolsheviks to seize power in the October Revolution. Seeking to consolidate their new regime, the Bolsheviks signed the Treaty of Brest-Litovsk with the Central Powers. This draconian treaty forced Russia to cede vast territories, including Ukraine, the Baltic states, and Finland, effectively ending the war on the Eastern Front and allowing Germany to transfer its veteran divisions to the West for a final, decisive blow.',
    historicalContext: 'Russia\'s withdrawal briefly gave the Central Powers a realistic strategic chance for victory, but it also introduced a new, explosive ideological element to the conflict. The birth of the Soviet Union created a permanent ideological fault line in Europe that would define the 20th century. The "Red Scare" that followed WWI shaped Western domestic politics and led to the long-term isolation of the USSR. This geopolitical tension was a primary driver of the instability during the interwar period and provided a core element of the Nazi Party\'s propaganda as they rose to power in Germany.',
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
    image: 'https://images.unsplash.com/photo-1506466010722-395ee2bef877?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Following the failure of the German "Spring Offensive," the Allied forces launched a massive, coordinated counter-attack known as the Hundred Days Offensive. Utilizing new "combined arms" tactics—integrating massed tanks, synchronized air support, and sophisticated artillery—the Allies broke through the Hindenburg Line. Simultaneously, Germany\'s allies (Bulgaria, the Ottoman Empire, and Austria-Hungary) collapsed under internal and external pressure. As the German army retreated and domestic revolution threatened Berlin, Kaiser Wilhelm II was forced to abdicate. On November 11, 1918, an armistice was signed in a railway carriage at Compiègne, ending the fighting.',
    historicalContext: 'The suddenness of the German collapse, occurring while their troops still occupied foreign territory, had profound political consequences. It gave birth to the "Dolchstoßlegende" or "stab-in-the-back" myth—the false narrative that the German army remained undefeated on the battlefield but was betrayed at home by Jews, socialists, and "November Criminals." This myth became the foundational propaganda tool for the rise of Adolf Hitler and the Nazi Party. The Hundred Days established the blueprint for modern mechanized warfare, but the bitterness of the defeat and the perceived "betrayal" ensured that the peace of 1918 would be fragile.',
    period: 'WWI',
    location: 'Amiens, France',
    coordinates: [49.8942, 2.2957],
    sources: [
      'Lloyd, N. (2013). Hundred Days.',
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
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'The Treaty of Versailles was the primary peace document that formally ended WWI. Negotiated by the "Big Three"—Lloyd George of Britain, Clemenceau of France, and Wilson of the USA—it was a complex compromise between high-minded idealism and a desire for security and retribution. The treaty established the League of Nations, intended to prevent future wars through collective security. However, it also included the controversial Article 231 (the "War Guilt Clause"), which forced Germany to accept sole responsibility for the war and pay massive financial reparations that would cripple its economy for a decade.',
    historicalContext: 'Versailles is widely considered one of the great failures of 20th-century diplomacy. By stripping Germany of its pride and economic stability without permanently breaking its long-term industrial potential, it created a powerful, revisionist state with a deep-seated grievance. The US Senate\'s refusal to ratify the treaty or join the League of Nations left the new international order without its most powerful guarantor. Instead of a lasting peace, the treaty essentially established a "twenty-year armistice," creating the very economic and political conditions that allowed fascism to thrive in the 1930s.',
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
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Amidst the chaos of the "Biennio Rosso" (the Two Red Years) of socialist unrest, Benito Mussolini and his National Fascist Party organized a massive paramilitary demonstration known as the March on Rome. Thousands of "Blackshirts" began to converge on the capital, threatening a coup d\'état. Fearing civil war, King Victor Emmanuel III refused to declare martial law and instead invited Mussolini to form a government. Although the "march" itself was largely symbolic and occurred after Mussolini was appointed Prime Minister, it was successfully mythologized as a violent seizure of power that saved Italy from communism.',
    historicalContext: 'The March on Rome provided the global template for modern totalitarianism. Mussolini successfully combined mass media, paramilitary violence, and nationalist mythology to create a new form of "leader-worship." His apparent success in restoring "order" and national prestige fascinated and inspired observers around the world, most notably Adolf Hitler, who would attempt to mimic the tactic in his failed Beer Hall Putsch a year later. This event marked the beginning of the democratic retreat in Europe and the emergence of a violent, authoritarian alternative to both liberal democracy and Soviet communism.',
    period: 'INTERWAR',
    location: 'Rome, Italy',
    coordinates: [41.9028, 12.4964],
    sources: [
      'Bosworth, R. J. B. (2002). Mussolini.',
      'Morgan, P. (2003). Fascism in Europe.',
      'Lyttelton, A. (1973). The Seizure of Power.'
    ]
  },
  {
    id: 'munich-agreement',
    year: '1938',
    title: 'The Munich Agreement',
    shortDescription: 'The peak and failure of Appeasement.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In September 1938, as Hitler threatened war over the Sudetenland—a German-speaking region of Czechoslovakia—the leaders of Britain, France, and Italy met in Munich to find a peaceful solution. In a stunning display of "Appeasement," British Prime Minister Neville Chamberlain and French Premier Édouard Daladier agreed to Hitler\'s demands, permitting the German annexation of the territory in exchange for a promise of no further expansion. The Czechoslovakian government was not even invited to the meeting. Chamberlain returned to London famously waving a piece of paper and declaring he had achieved "peace for our time."',
    historicalContext: 'Munich has become the definitive historical lesson on the dangers of negotiating with aggressive dictators from a position of perceived weakness. Its failure demonstrated that Hitler\'s ambitions were not rational or limited to national self-determination. Legally, the agreement signaled the final death of the League of Nations\' principle of collective security. Strategically, it convinced Joseph Stalin that the Western democracies would never stand up to Hitler, directly leading to the cynical Nazi-Soviet Non-Aggression Pact of 1939, which cleared the way for the invasion of Poland.',
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
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'At dawn on September 1, 1939, Germany launched a massive invasion of Poland, justified by a staged "false flag" operation at a radio station in Gleiwitz. This campaign saw the debut of "Blitzkrieg" (Lightning War)—a revolutionary tactical concept combining concentrated Panzer divisions, motorized infantry, and overwhelming air support from the Luftwaffe. The speed and violence of the German advance paralyzed Polish communications and command. Two weeks later, following the secret protocols of the Nazi-Soviet Pact, the Soviet Union invaded from the East. Despite a desperate defense, Poland was carved up between the two totalitarian powers in just over a month.',
    historicalContext: 'The invasion of Poland ended the era of static, trench-based warfare that had dominated the Great War. It proved that modern industrial nations could achieve decisive military results in weeks rather than years through technological coordination. For the international order, it was the final proof that the guarantees of the Treaty of Versailles and the League of Nations were worthless. Britain and France, finally recognizing the existential threat, declared war on Germany, transforming a regional conflict into the most destructive global struggle in human history.',
    period: 'WWII',
    location: 'Westerplatte, Poland',
    coordinates: [54.4075, 18.6672],
    sources: [
      'Moorhouse, R. (2019). First to Fight.',
      'Keegan, J. (1989). The Second World War.',
      'Frieser, K. H. (2005). The Blitzkrieg Legend.'
    ]
  },
  {
    id: 'fall-of-france',
    year: 'May-June 1940',
    title: 'The Fall of France and Dunkirk',
    shortDescription: 'The collapse of the Western Allies.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In May 1940, Germany launched a brilliant but risky offensive in the West. Bypassing the formidable Maginot Line by striking through the "impassable" Ardennes Forest, German Panzer divisions raced to the English Channel, cutting off the Allied armies in Belgium. This led to the desperate evacuation at Dunkirk, where a flotilla of over 800 "little ships"—civilian fishing boats, yachts, and lifeboats—helped rescue 338,000 British and French troops under constant aerial bombardment. However, the French army, the supposed strongest in Europe, collapsed in just six weeks, and a pro-German "Vichy" regime was established in the south.',
    historicalContext: 'The fall of France was perhaps the most shocking military event of the 20th century. It shattered the global balance of power and left the British Empire to face the Axis powers alone. The loss of the French fleet and industrial base necessitated the U.S. transition to a "war economy" long before its formal entry into the conflict. Strategically, it meant that any return to the European continent would require a massive, multi-year amphibious preparation, forcing the Western Allies into long peripheral campaigns in North Africa and Italy to wear down German strength.',
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
    image: 'https://images.unsplash.com/photo-1605335198150-b0b307406631?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In June 1941, Adolf Hitler launched Operation Barbarossa, the largest land invasion in human history. Over three million German and Axis troops, supported by thousands of tanks and aircraft, surged across a 2,000-mile front into the Soviet Union. This was not a traditional war for territory, but a "Vernichtungskrieg" (War of Annihilation) driven by Nazi racial ideology. Hitler sought "Lebensraum" (Living Space) for the German people and intended to destroy the "Judeo-Bolshevik" regime. The Red Army, decimated by Stalin\'s pre-war purges, suffered catastrophic losses in the opening months, losing entire army groups in massive encirclements at Minsk and Kiev.',
    historicalContext: 'Barbarossa transformed WWII from a European struggle into a titanic, ideological conflict between two totalitarian giants. The Eastern Front became the primary theater of the war, where over 80% of German military casualties would eventually occur. Its legacy is the ultimate industrial and demographic exhaustion of Germany and the emergence of the Soviet Union as a superpower. The sheer scale of the atrocities committed during the invasion, including the systematic mass murder of Jews by the Einsatzgruppen, solidified the war\'s place as the most profound moral catastrophe of the modern era.',
    period: 'WWII',
    location: 'Brest-Litovsk, Belarus',
    coordinates: [52.1333, 23.6667],
    sources: [
      'Glantz, D. M. (2001). Barbarossa.',
      'Beevor, A. (2012). The Second World War.',
      'Erickson, J. (1975). The Road to Stalingrad.'
    ]
  },
  {
    id: 'midway-battle',
    year: 'June 1942',
    title: 'The Battle of Midway',
    shortDescription: 'The turning point of the Pacific War.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Just six months after Pearl Harbor, the Japanese Imperial Navy attempted to lure the remaining U.S. aircraft carriers into a decisive trap at Midway Atoll. However, U.S. naval intelligence had successfully broken the Japanese naval code, allowing Admiral Nimitz to ambush the ambushers. In a chaotic and legendary engagement, U.S. SBD Dauntless dive bombers caught the Japanese carriers with their decks full of fueled and armed aircraft. In just five critical minutes, three Japanese carriers were mortally wounded, with a fourth following shortly after. The U.S. lost only the carrier USS Yorktown.',
    historicalContext: 'Midway was the definitive turning point of the Pacific War. It shattered the Japanese Navy\'s offensive capability and ended its string of naval victories. Strategically, it shifted the initiative to the United States, allowing for the start of the "island-hopping" campaign at Guadalcanal. Technically, the battle signaled the end of the "battleship era," proving that air power was now the dominant factor in maritime security. The loss of veteran Japanese pilots and skilled aircraft mechanics was a demographic blow from which the Empire of Japan never fully recovered.',
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
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'The Battle of Stalingrad was perhaps the most brutal engagement in military history. What began as a German offensive to capture the strategic oil fields of the Caucasus turned into a desperate, street-by-street struggle for a city named after Hitler\'s rival. For months, soldiers fought for individual rooms in ruined factories and apartment blocks. In November 1942, the Soviets launched Operation Uranus, a massive pincer movement that surrounded the German 6th Army. Despite Hitler\'s orders to fight to the last man, Field Marshal Friedrich Paulus surrendered in February 1943, marking the first time a German Field Marshal had ever been captured.',
    historicalContext: 'Stalingrad was the psychological and strategic turning point of the entire European war. It destroyed the myth of German military invincibility and provided a massive morale boost to the Allied cause. For the Soviet Union, it was the definitive proof of their national resilience and industrial capability. The loss of over 800,000 Axis troops meant that Germany could never again launch a major, multi-front offensive in the East. From this point forward, the war in Europe became a slow, bloody retreat for the Third Reich.',
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
    image: 'https://images.unsplash.com/photo-1550133730-695473e544be?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In July 1943, Germany launched Operation Citadel, a final attempt to regain the initiative on the Eastern Front by cutting off a massive Soviet salient at Kursk. However, the Soviets, alerted by British intelligence and their own reconnaissance, had spent months building the most formidable defensive system in history, consisting of minefields, anti-tank ditches, and deep artillery belts. The resulting clash involved nearly 3,000 German tanks and 5,000 Soviet tanks. The German Panzers were ground down against the deep Soviet defenses, and the Red Army immediately launched massive counter-offensives (Operations Kutuzov and Polkovodets Rumyantsev) that drove the Germans back.',
    historicalContext: 'Kursk was the last major German offensive in the East. It proved that the Soviet military had fully professionalized and could out-engineer, out-produce, and out-fight the Wehrmacht in a massive mechanized struggle. After Kursk, Germany was forced into a permanent, defensive retreat across a 2,000-mile front. The battle also demonstrated that the qualitative edge of German heavy tanks (like the Tiger and Panther) could be nullified by superior Soviet numbers, deep defense-in-depth, and effective operational command.',
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
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'By April 1945, the Soviet Red Army had reached the outskirts of Berlin. The final battle for the Nazi capital was a desperate struggle through the ruins of the city, involving over 2.5 million Soviet troops. As the Red Banner was raised over the Reichstag, Adolf Hitler committed suicide in his underground bunker on April 30. On May 7, General Alfred Jodl signed the unconditional surrender of all German forces at Reims, followed by a formal ceremony in Berlin on May 8. This day, known as V-E Day (Victory in Europe), saw massive celebrations across the Allied nations, marking the end of the most horrific conflict in European history.',
    historicalContext: 'The fall of Berlin marked the total destruction of German military power for the second time in 30 years. However, unlike 1918, the occupation that followed was absolute. Germany was divided into four occupation zones, a decision that would lead to the formal division of the country into East and West Germany. The presence of millions of Soviet troops in the heart of Europe established the "Iron Curtain" and served as the physical and political starting point for the Cold War confrontation that would dominate the next half-century.',
    period: 'WWII',
    location: 'Berlin, Germany',
    coordinates: [52.5186, 13.3761],
    sources: [
      'Beevor, A. (2002). Berlin.',
      'Ryan, C. (1966). The Last Battle.',
      'Fest, J. (2004). Inside Hitler\'s Bunker.'
    ]
  },
  {
    id: 'japanese-surrender',
    year: 'August-September 1945',
    title: 'The Atomic Bombs and V-J Day',
    shortDescription: 'The end of WWII and the nuclear dawn.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In August 1945, seeking to force a Japanese surrender without a costly invasion of the home islands, the United States dropped two newly-developed atomic bombs on the cities of Hiroshima and Nagasaki. Simultaneously, the Soviet Union declared war on Japan and launched a massive invasion of Japanese-occupied Manchuria. These twin shocks, combined with the personal intervention of Emperor Hirohito, forced the Japanese government to accept the terms of the Potsdam Declaration. On September 2, 1945, the formal surrender was signed aboard the USS Missouri in Tokyo Bay, finally bringing the Second World War to an end.',
    historicalContext: 'The end of the Pacific War marked the definitive transition of the United States from an isolationist power to a global military and economic hegemon. However, the introduction of nuclear weapons fundamentally and permanently changed the nature of human conflict. The "Nuclear Dawn" created a new world order based on the concept of Mutually Assured Destruction (MAD). The debate over the morality and necessity of using these weapons continues to this day, as they remain the primary factor in preventng direct military conflict between the world\'s Great Powers.',
    period: 'WWII',
    location: 'Tokyo Bay, Japan',
    coordinates: [35.4800, 139.7700],
    sources: [
      'Rhodes, R. (1986). The Making of the Atomic Bomb.',
      'Frank, R. B. (1999). Downfall.',
      'Hasegawa, T. (2005). Racing the Enemy.'
    ]
  },

  // --- POST_WWII ---
  {
    id: 'nuremberg-trials',
    year: '1945-1946',
    title: 'The Nuremberg Trials',
    shortDescription: 'Justice for crimes against humanity.',
    image: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In the aftermath of the war, the four major Allied powers established the International Military Tribunal in Nuremberg, the birthplace of the Nazi Party. Twenty-four high-ranking Nazi officials were prosecuted for four types of crimes: Conspiracy, Crimes against Peace, War Crimes, and Crimes against Humanity. The trials were a complex legal endeavor that sought to establish a factual record of the Holocaust and other atrocities. Despite criticisms of "victor\'s justice," the trials resulted in twelve death sentences and established the precedent that "following superior orders" was not a valid legal defense for atrocities.',
    historicalContext: 'Nuremberg was a revolutionary moment in international law. It established the principle of individual criminal responsibility for state-sponsored acts, laying the foundation for the modern International Criminal Court and the UN\'s Universal Declaration of Human Rights. It fundamentally changed the concept of national sovereignty, asserting that there are universal laws of humanity that transcend the orders of a national government. The trials also provided a necessary, though incomplete, process of "denazification" for the German people, forcing a direct confrontation with the crimes of the previous regime.',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'By 1947, Western Europe was on the brink of economic collapse, a situation the U.S. feared would lead to the spread of Soviet influence. U.S. Secretary of State George Marshall proposed a massive economic recovery program, providing over $13 billion (over $150 billion today) in aid. The program required European nations to cooperate on a joint recovery plan, encouraging the lowering of trade barriers and the modernization of industrial production. While offered to the Soviet Union and its satellites, they rejected the aid as a form of "dollar imperialism," deepening the divide between East and West.',
    historicalContext: 'The Marshall Plan was one of the most successful foreign policy initiatives in history. It achieved its primary goal of stabilizing Western European democracies and preventing communist takeovers. However, it was also a critical instrument of "Containment"—the U.S. strategy to limit Soviet expansion. By binding the economies of Western Europe to each other and to the United States, it laid the direct institutional foundations for the European Coal and Steel Community, which would eventually evolve into the European Union.',
    period: 'POST_WWII',
    location: 'Paris, France',
    coordinates: [48.8566, 2.3522],
    sources: [
      'Steil, B. (2018). The Marshall Plan.',
      'Hogan, M. J. (1987). The Marshall Plan.',
      'Behrman, G. (2007). The Most Noble Adventure.'
    ]
  },
  {
    id: 'berlin-airlift',
    year: '1948-1949',
    title: 'The Berlin Airlift',
    shortDescription: 'The first major confrontation of the Cold War.',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'In June 1948, in response to the Western Allies\' introduction of a new currency in West Germany, the Soviet Union blocked all ground access to West Berlin. Hoping to starve the city into submission, they cut off food, fuel, and electricity. Instead of retreating or triggering a hot war, the Allies launched "Operation Vittles." For nearly a year, Allied planes landed every few minutes at Tempelhof Airport, delivering over 2.3 million tons of supplies. The airlift was an extraordinary logistical feat and a propaganda victory for the West, as pilots like Gail Halvorsen (the "Candy Bomber") dropped sweets for the children of the besieged city.',
    historicalContext: 'The Berlin Airlift was the first major "test of will" of the Cold War. It proved that the Western Allies were committed to defending their interests in Europe without resorting to nuclear war. The Soviet failure to break the city led directly to the formation of the Federal Republic of Germany (West Germany) and the creation of NATO. It established the "Containment" policy as the operative strategy for the next four decades and proved that the Cold War would be fought through logistics, technology, and propaganda rather than direct military engagement.',
    period: 'POST_WWII',
    location: 'Tempelhof, Berlin',
    coordinates: [52.4811, 13.3869],
    sources: [
      'Miller, R. G. (1998). To Save a City.',
      'Tusa, A., & Tusa, J. (1988). The Berlin Blockade.',
      'Giangreco, D. M., & Griffin, R. E. (1988). Airbridge to Berlin.'
    ]
  },
  {
    id: 'nato-warsaw-pact',
    year: '1949-1955',
    title: 'The Cold War Divide',
    shortDescription: 'The formation of military blocks.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200',
    fullContent: 'Seeking to ensure permanent American involvement in European security, twelve Western nations signed the North Atlantic Treaty in 1949, creating NATO. The treaty\'s centerpiece was Article 5, which declared that an attack against one member was an attack against all. In 1955, after West Germany was admitted to NATO, the Soviet Union responded by creating the Warsaw Pact with its Eastern European satellite states. These two military blocks formalized the "Iron Curtain" that Winston Churchill had famously described, creating a permanent state of high-alert readiness that would last for nearly forty years.',
    historicalContext: 'This division of the world into two hostile, nuclear-armed camps created a remarkably stable—if terrifying—global order. It effectively ended the "German Question" that had caused two world wars by subsuming German power into larger international structures. The legacy of these alliances continues to define global security today; the expansion of NATO and the psychological scar of the Warsaw Pact remain central themes in 21st-century geopolitical tensions in Eastern Europe. The world created between 1949 and 1955 was one where "Total War" was prevented by the constant threat of total annihilation.',
    period: 'POST_WWII',
    location: 'Brussels, Belgium',
    coordinates: [50.8503, 4.3517],
    sources: [
      'Gaddis, J. L. (2005). The Cold War.',
      'NATO Archives',
      'Mastny, V., & Byrne, M. (2005). A Cardboard Castle?'
    ]
  }
];
