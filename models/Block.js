module.exports = (sequelize, DataTypes) => {
    const Block = sequelize.define('Block', {
        nomor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        blok: {
            type: DataTypes.INTEGER
        },
        x: {
            type: DataTypes.STRING,
            allowNull: false
        },
        y: {
            type: DataTypes.STRING,
            allowNull: false
        },
        z: {
            type: DataTypes.STRING,
            allowNull: false
        },
        family: {
            type: DataTypes.STRING
        },
        nama_spesies: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        tinggi_batang: {
            type: DataTypes.STRING
        },
        lebar_tajuk: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'blok'
    });

    return Block;
}