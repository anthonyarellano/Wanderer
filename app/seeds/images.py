from app.models import db, Image

def seed_images():
    one = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach1.jpg=index?0'
    )
    two = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach2.jpg=index?1'
    )
    three = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach3.jpg=index?2'
    )
    four = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach4.jpg=index?3'
    )
    five = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach5.jpg=index?4'
    )
    cabin1 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin1.jpg=index?0'
    )
    cabin2 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin2.jpg=index?1'
    )
    cabin3 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin3.jpg=index?2'
    )
    cabin4 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin4.jpg=index?3'
    )
    cabin5 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin5.jpg=index?4'
    )
    denver1 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    denver2 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    denver3 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    denver4 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver1.jpg=index?0'
    )
    denver5 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    nyc1 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc1.jpg=index?0'
    )
    nyc2 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyc3 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyc4 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyc5 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    sub1 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs1.jpg=index?0'
    )
    sub2 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs2.jpg=index?1'
    )
    sub3 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs3.jpg=index?2'
    )
    sub4 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs4.jpg=index?3'
    )
    sub5 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs5.jpg=index?4'
    )

    # NYC apartment 2 -- -- --
    nyca2_1 = Image(
        listing_id=6,
        url='https://tonesbucket.s3.amazonaws.com/cnyc2-min.jpg=index?0'
    )
    nyca2_2 = Image(
        listing_id=6,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca2_3 = Image(
        listing_id=6,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca2_4 = Image(
        listing_id=6,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca2_5 = Image(
        listing_id=6,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 3
    nyca3_1 = Image(
        listing_id=7,
        url='https://tonesbucket.s3.amazonaws.com/cnyc3-min.jpg=index?0'
    )
    nyca3_2 = Image(
        listing_id=7,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca3_3 = Image(
        listing_id=7,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca3_4 = Image(
        listing_id=7,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca3_5 = Image(
        listing_id=7,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 4
    nyca4_1 = Image(
        listing_id=8,
        url='https://tonesbucket.s3.amazonaws.com/cnyc4-min.jpg=index?0'
    )
    nyca4_2 = Image(
        listing_id=8,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca4_3 = Image(
        listing_id=8,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca4_4 = Image(
        listing_id=8,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca4_5 = Image(
        listing_id=8,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 5
    nyca5_1 = Image(
        listing_id=9,
        url='https://tonesbucket.s3.amazonaws.com/cnyc5-min.jpg=index?0'
    )
    nyca5_2 = Image(
        listing_id=9,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca5_3 = Image(
        listing_id=9,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca5_4 = Image(
        listing_id=9,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca5_5 = Image(
        listing_id=9,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 6
    nyca6_1 = Image(
        listing_id=10,
        url='https://tonesbucket.s3.amazonaws.com/cnyc6-min.jpg=index?0'
    )
    nyca6_2 = Image(
        listing_id=10,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca6_3 = Image(
        listing_id=10,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca6_4 = Image(
        listing_id=10,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca6_5 = Image(
        listing_id=10,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 7
    nyca7_1 = Image(
        listing_id=11,
        url='https://tonesbucket.s3.amazonaws.com/cnyc7-min.jpg=index?0'
    )
    nyca7_2 = Image(
        listing_id=11,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca7_3 = Image(
        listing_id=11,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca7_4 = Image(
        listing_id=11,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca7_5 = Image(
        listing_id=11,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 8
    nyca8_1 = Image(
        listing_id=12,
        url='https://tonesbucket.s3.amazonaws.com/cnyc8-min.jpg=index?0'
    )
    nyca8_2 = Image(
        listing_id=12,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca8_3 = Image(
        listing_id=12,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca8_4 = Image(
        listing_id=12,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca8_5 = Image(
        listing_id=12,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 9
    nyca9_1 = Image(
        listing_id=13,
        url='https://tonesbucket.s3.amazonaws.com/cnyc9-min.jpg=index?0'
    )
    nyca9_2 = Image(
        listing_id=13,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca9_3 = Image(
        listing_id=13,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca9_4 = Image(
        listing_id=13,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca9_5 = Image(
        listing_id=13,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    # NYC apartment 10
    nyca10_1 = Image(
        listing_id=14,
        url='https://tonesbucket.s3.amazonaws.com/cnyc10-min.jpg=index?0'
    )
    nyca10_2 = Image(
        listing_id=14,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyca10_3 = Image(
        listing_id=14,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyca10_4 = Image(
        listing_id=14,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyca10_5 = Image(
        listing_id=14,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )

    # Denver listing 2 -- -- --
    den2_1 = Image(
        listing_id=15,
        url='https://tonesbucket.s3.amazonaws.com/cden2-min.jpg=index?0'
    )
    den2_2 = Image(
        listing_id=15,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den2_3 = Image(
        listing_id=15,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den2_4 = Image(
        listing_id=15,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den2_5 = Image(
        listing_id=15,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 3
    den3_1 = Image(
        listing_id=16,
        url='https://tonesbucket.s3.amazonaws.com/cden3-min.jpg=index?0'
    )
    den3_2 = Image(
        listing_id=16,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den3_3 = Image(
        listing_id=16,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den3_4 = Image(
        listing_id=16,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den3_5 = Image(
        listing_id=16,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 4
    den4_1 = Image(
        listing_id=17,
        url='https://tonesbucket.s3.amazonaws.com/cden4-min.jpg=index?0'
    )
    den4_2 = Image(
        listing_id=17,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den4_3 = Image(
        listing_id=17,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den4_4 = Image(
        listing_id=17,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den4_5 = Image(
        listing_id=17,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 5
    den5_1 = Image(
        listing_id=18,
        url='https://tonesbucket.s3.amazonaws.com/cden5-min.jpg=index?0'
    )
    den5_2 = Image(
        listing_id=18,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den5_3 = Image(
        listing_id=18,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den5_4 = Image(
        listing_id=18,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den5_5 = Image(
        listing_id=18,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 6
    den6_1 = Image(
        listing_id=19,
        url='https://tonesbucket.s3.amazonaws.com/cden6-min.jpg=index?0'
    )
    den6_2 = Image(
        listing_id=19,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den6_3 = Image(
        listing_id=19,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den6_4 = Image(
        listing_id=19,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den6_5 = Image(
        listing_id=19,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 7
    den7_1 = Image(
        listing_id=20,
        url='https://tonesbucket.s3.amazonaws.com/cden7-min.jpg=index?0'
    )
    den7_2 = Image(
        listing_id=20,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den7_3 = Image(
        listing_id=20,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den7_4 = Image(
        listing_id=20,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den7_5 = Image(
        listing_id=20,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 8
    den8_1 = Image(
        listing_id=21,
        url='https://tonesbucket.s3.amazonaws.com/cden8-min.jpg=index?0'
    )
    den8_2 = Image(
        listing_id=21,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den8_3 = Image(
        listing_id=21,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den8_4 = Image(
        listing_id=21,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den8_5 = Image(
        listing_id=21,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 9
    den9_1 = Image(
        listing_id=22,
        url='https://tonesbucket.s3.amazonaws.com/cden9-min.jpg=index?0'
    )
    den9_2 = Image(
        listing_id=22,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den9_3 = Image(
        listing_id=22,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den9_4 = Image(
        listing_id=22,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den9_5 = Image(
        listing_id=22,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    # Denver listing 10
    den10_1 = Image(
        listing_id=23,
        url='https://tonesbucket.s3.amazonaws.com/cden10-min.jpg=index?0'
    )
    den10_2 = Image(
        listing_id=23,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    den10_3 = Image(
        listing_id=23,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    den10_4 = Image(
        listing_id=23,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    den10_5 = Image(
        listing_id=23,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )

    # Austin listing 1 -- -- --
    aus1_1 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/caus1.jpg=index?0'
    )
    aus1_2 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus1_3 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus1_4 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus1_5 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 2
    aus2_1 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/caus2.jpg=index?0'
    )
    aus2_2 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus2_3 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus2_4 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus2_5 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 3
    aus3_1 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/caus3.jpg=index?0'
    )
    aus3_2 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus3_3 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus3_4 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus3_5 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 4
    aus4_1 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/caus4.jpg=index?0'
    )
    aus4_2 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus4_3 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus4_4 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus4_5 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 5
    aus5_1 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/caus5.jpg=index?0'
    )
    aus5_2 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus5_3 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus5_4 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus5_5 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 6
    aus6_1 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/caus6.jpg=index?0'
    )
    aus6_2 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus6_3 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus6_4 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus6_5 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 7
    aus7_1 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/caus7.jpg=index?0'
    )
    aus7_2 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus7_3 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus7_4 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus7_5 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 8
    aus8_1 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/caus8.jpg=index?0'
    )
    aus8_2 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus8_3 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus8_4 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus8_5 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 9
    aus9_1 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/caus9.jpg=index?0'
    )
    aus9_2 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus9_3 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus9_4 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus9_5 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 10
    aus10_1 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/caus10.jpg=index?0'
    )
    aus10_2 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus10_3 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus10_4 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus10_5 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )

    # Los Angeles listing 1 -- -- --
    los1_1 = Image(
        listing_id=34,
        url='https://tonesbucket.s3.amazonaws.com/cla1.jpg=index?0'
    )
    los1_2 = Image(
        listing_id=34,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los1_3 = Image(
        listing_id=34,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los1_4 = Image(
        listing_id=34,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los1_5 = Image(
        listing_id=34,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 2
    los2_1 = Image(
        listing_id=35,
        url='https://tonesbucket.s3.amazonaws.com/cla2.jpg=index?0'
    )
    los2_2 = Image(
        listing_id=35,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los2_3 = Image(
        listing_id=35,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los2_4 = Image(
        listing_id=35,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los2_5 = Image(
        listing_id=35,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 3
    los3_1 = Image(
        listing_id=36,
        url='https://tonesbucket.s3.amazonaws.com/cla3.jpg=index?0'
    )
    los3_2 = Image(
        listing_id=36,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los3_3 = Image(
        listing_id=36,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los3_4 = Image(
        listing_id=36,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los3_5 = Image(
        listing_id=36,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 4
    los4_1 = Image(
        listing_id=37,
        url='https://tonesbucket.s3.amazonaws.com/cla4.jpg=index?0'
    )
    los4_2 = Image(
        listing_id=37,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los4_3 = Image(
        listing_id=37,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los4_4 = Image(
        listing_id=37,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los4_5 = Image(
        listing_id=37,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 5
    los5_1 = Image(
        listing_id=38,
        url='https://tonesbucket.s3.amazonaws.com/cla5.jpg=index?0'
    )
    los5_2 = Image(
        listing_id=38,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los5_3 = Image(
        listing_id=38,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los5_4 = Image(
        listing_id=38,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los5_5 = Image(
        listing_id=38,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 6
    los6_1 = Image(
        listing_id=39,
        url='https://tonesbucket.s3.amazonaws.com/cla6.jpg=index?0'
    )
    los6_2 = Image(
        listing_id=39,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los6_3 = Image(
        listing_id=39,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los6_4 = Image(
        listing_id=39,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los6_5 = Image(
        listing_id=39,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 7
    los7_1 = Image(
        listing_id=40,
        url='https://tonesbucket.s3.amazonaws.com/cla7.jpg=index?0'
    )
    los7_2 = Image(
        listing_id=40,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los7_3 = Image(
        listing_id=40,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los7_4 = Image(
        listing_id=40,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los7_5 = Image(
        listing_id=40,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 8
    los8_1 = Image(
        listing_id=41,
        url='https://tonesbucket.s3.amazonaws.com/cla8.jpg=index?0'
    )
    los8_2 = Image(
        listing_id=41,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los8_3 = Image(
        listing_id=41,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los8_4 = Image(
        listing_id=41,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los8_5 = Image(
        listing_id=41,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 9
    los9_1 = Image(
        listing_id=42,
        url='https://tonesbucket.s3.amazonaws.com/cla9.jpg=index?0'
    )
    los9_2 = Image(
        listing_id=42,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los9_3 = Image(
        listing_id=42,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los9_4 = Image(
        listing_id=42,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los9_5 = Image(
        listing_id=42,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )
    # Los Angeles listing 10
    los10_1 = Image(
        listing_id=43,
        url='https://tonesbucket.s3.amazonaws.com/cla10.jpg=index?0'
    )
    los10_2 = Image(
        listing_id=43,
        url='https://tonesbucket.s3.amazonaws.com/la2-min.jpg=index?1'
    )
    los10_3 = Image(
        listing_id=43,
        url='https://tonesbucket.s3.amazonaws.com/la3-min.jpg=index?2'
    )
    los10_4 = Image(
        listing_id=43,
        url='https://tonesbucket.s3.amazonaws.com/la4-min.jpg=index?3'
    )
    los10_5 = Image(
        listing_id=43,
        url='https://tonesbucket.s3.amazonaws.com/la5-min.jpg=index?4'
    )

    # Chicago listings 1 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 2 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 3 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 4 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 5 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 6 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 7 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 8 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 9 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )
    # Chicago listings 10 -- -- --
    chi_1 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/cchi.jpg=index?0'
    )
    chi_2 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi2-min.jpg=index?1'
    )
    chi_3 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi3-min.jpg=index?2'
    )
    chi_4 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi4-min.jpg=index?3'
    )
    chi_5 = Image(
        listing_id=,
        url='https://tonesbucket.s3.amazonaws.com/chi5-min.jpg=index?4'
    )


    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)

    db.session.add(sub1)
    db.session.add(sub2)
    db.session.add(sub3)
    db.session.add(sub4)
    db.session.add(sub5)

    db.session.add(cabin1)
    db.session.add(cabin2)
    db.session.add(cabin3)
    db.session.add(cabin4)
    db.session.add(cabin5)

    db.session.add(denver1)
    db.session.add(denver2)
    db.session.add(denver3)
    db.session.add(denver4)
    db.session.add(denver5)

    db.session.add(nyc1)
    db.session.add(nyc2)
    db.session.add(nyc3)
    db.session.add(nyc4)
    db.session.add(nyc5)

    db.session.add(nyca2_1)
    db.session.add(nyca2_2)
    db.session.add(nyca2_3)
    db.session.add(nyca2_4)
    db.session.add(nyca2_5)

    db.session.add(nyca3_1)
    db.session.add(nyca3_2)
    db.session.add(nyca3_3)
    db.session.add(nyca3_4)
    db.session.add(nyca3_5)

    db.session.add(nyca4_1)
    db.session.add(nyca4_2)
    db.session.add(nyca4_3)
    db.session.add(nyca4_4)
    db.session.add(nyca4_5)

    db.session.add(nyca5_1)
    db.session.add(nyca5_2)
    db.session.add(nyca5_3)
    db.session.add(nyca5_4)
    db.session.add(nyca5_5)

    db.session.add(nyca6_1)
    db.session.add(nyca6_2)
    db.session.add(nyca6_3)
    db.session.add(nyca6_4)
    db.session.add(nyca6_5)

    db.session.add(nyca7_1)
    db.session.add(nyca7_2)
    db.session.add(nyca7_3)
    db.session.add(nyca7_4)
    db.session.add(nyca7_5)

    db.session.add(nyca8_1)
    db.session.add(nyca8_2)
    db.session.add(nyca8_3)
    db.session.add(nyca8_4)
    db.session.add(nyca8_5)

    db.session.add(nyca9_1)
    db.session.add(nyca9_2)
    db.session.add(nyca9_3)
    db.session.add(nyca9_4)
    db.session.add(nyca9_5)

    db.session.add(nyca10_1)
    db.session.add(nyca10_2)
    db.session.add(nyca10_3)
    db.session.add(nyca10_4)
    db.session.add(nyca10_5)

    db.session.add(den2_1)
    db.session.add(den2_2)
    db.session.add(den2_3)
    db.session.add(den2_4)
    db.session.add(den2_5)

    db.session.add(den3_1)
    db.session.add(den3_2)
    db.session.add(den3_3)
    db.session.add(den3_4)
    db.session.add(den3_5)

    db.session.add(den4_1)
    db.session.add(den4_2)
    db.session.add(den4_3)
    db.session.add(den4_4)
    db.session.add(den4_5)

    db.session.add(den5_1)
    db.session.add(den5_2)
    db.session.add(den5_3)
    db.session.add(den5_4)
    db.session.add(den5_5)

    db.session.add(den6_1)
    db.session.add(den6_2)
    db.session.add(den6_3)
    db.session.add(den6_4)
    db.session.add(den6_5)

    db.session.add(den7_1)
    db.session.add(den7_2)
    db.session.add(den7_3)
    db.session.add(den7_4)
    db.session.add(den7_5)

    db.session.add(den8_1)
    db.session.add(den8_2)
    db.session.add(den8_3)
    db.session.add(den8_4)
    db.session.add(den8_5)

    db.session.add(den9_1)
    db.session.add(den9_2)
    db.session.add(den9_3)
    db.session.add(den9_4)
    db.session.add(den9_5)

    db.session.add(den10_1)
    db.session.add(den10_2)
    db.session.add(den10_3)
    db.session.add(den10_4)
    db.session.add(den10_5)

    db.session.add(aus1_1)
    db.session.add(aus1_2)
    db.session.add(aus1_3)
    db.session.add(aus1_4)
    db.session.add(aus1_5)

    db.session.add(aus2_1)
    db.session.add(aus2_2)
    db.session.add(aus2_3)
    db.session.add(aus2_4)
    db.session.add(aus2_5)

    db.session.add(aus3_1)
    db.session.add(aus3_2)
    db.session.add(aus3_3)
    db.session.add(aus3_4)
    db.session.add(aus3_5)

    db.session.add(aus4_1)
    db.session.add(aus4_2)
    db.session.add(aus4_3)
    db.session.add(aus4_4)
    db.session.add(aus4_5)

    db.session.add(aus5_1)
    db.session.add(aus5_2)
    db.session.add(aus5_3)
    db.session.add(aus5_4)
    db.session.add(aus5_5)

    db.session.add(aus6_1)
    db.session.add(aus6_2)
    db.session.add(aus6_3)
    db.session.add(aus6_4)
    db.session.add(aus6_5)

    db.session.add(aus7_1)
    db.session.add(aus7_2)
    db.session.add(aus7_3)
    db.session.add(aus7_4)
    db.session.add(aus7_5)

    db.session.add(aus8_1)
    db.session.add(aus8_2)
    db.session.add(aus8_3)
    db.session.add(aus8_4)
    db.session.add(aus8_5)

    db.session.add(aus9_1)
    db.session.add(aus9_2)
    db.session.add(aus9_3)
    db.session.add(aus9_4)
    db.session.add(aus9_5)

    db.session.add(aus10_1)
    db.session.add(aus10_2)
    db.session.add(aus10_3)
    db.session.add(aus10_4)
    db.session.add(aus10_5)

    db.session.add(los1_1)
    db.session.add(los1_2)
    db.session.add(los1_3)
    db.session.add(los1_4)
    db.session.add(los1_5)

    db.session.add(los2_1)
    db.session.add(los2_2)
    db.session.add(los2_3)
    db.session.add(los2_4)
    db.session.add(los2_5)

    db.session.add(los3_1)
    db.session.add(los3_2)
    db.session.add(los3_3)
    db.session.add(los3_4)
    db.session.add(los3_5)

    db.session.add(los4_1)
    db.session.add(los4_2)
    db.session.add(los4_3)
    db.session.add(los4_4)
    db.session.add(los4_5)

    db.session.add(los5_1)
    db.session.add(los5_2)
    db.session.add(los5_3)
    db.session.add(los5_4)
    db.session.add(los5_5)

    db.session.add(los6_1)
    db.session.add(los6_2)
    db.session.add(los6_3)
    db.session.add(los6_4)
    db.session.add(los6_5)

    db.session.add(los7_1)
    db.session.add(los7_2)
    db.session.add(los7_3)
    db.session.add(los7_4)
    db.session.add(los7_5)

    db.session.add(los8_1)
    db.session.add(los8_2)
    db.session.add(los8_3)
    db.session.add(los8_4)
    db.session.add(los8_5)

    db.session.add(los9_1)
    db.session.add(los9_2)
    db.session.add(los9_3)
    db.session.add(los9_4)
    db.session.add(los9_5)

    db.session.add(los10_1)
    db.session.add(los10_2)
    db.session.add(los10_3)
    db.session.add(los10_4)
    db.session.add(los10_5)

    db.session.commit()

def undo_seed_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
