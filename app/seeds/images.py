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
    aus_1 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/caus1.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=24,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 2
    aus_1 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/caus2.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=25,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 3
    aus_1 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/caus3.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=26,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 4
    aus_1 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/caus4.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=27,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 5
    aus_1 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/caus5.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=28,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 6
    aus_1 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/caus6.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=29,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 7
    aus_1 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/caus7.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=30,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 8
    aus_1 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/caus8.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=31,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 9
    aus_1 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/caus9.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=32,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )
    # Austin listing 10
    aus_1 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/caus10.jpg=index?0'
    )
    aus_2 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus2-min.jpg=index?1'
    )
    aus_3 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus3-min.jpg=index?2'
    )
    aus_4 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus4-min.jpg=index?3'
    )
    aus_5 = Image(
        listing_id=33,
        url='https://tonesbucket.s3.amazonaws.com/aus5-min.jpg=index?4'
    )

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)

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

    db.session.add(sub1)
    db.session.add(sub2)
    db.session.add(sub3)
    db.session.add(sub4)
    db.session.add(sub5)

    db.session.commit()


def undo_seed_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
